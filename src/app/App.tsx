import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from '../pokemon-logo.svg'
import Details from '../details/Details'
import { GlobalStyle, Screen, Header, HeaderLogo, Card, Image, Name } from './Styles'
import { PokemonListAPI, PokemonUrl, SinglePokemonData, EvolutionChainAPI, EvolutionStageAPI, SingleEvolutionData, EvolutionStage } from './Types'

function App() {
  const [data, setData] = useState([] as SinglePokemonData[])
  const [evolutionData, setEvolutionData] = useState([] as SingleEvolutionData[])
  const [active, setActive] = useState(null as null | number)
  const [activeEvolutionChain, setActiveEvolutionChain] = useState([] as EvolutionStage[])
  console.log(data)
  const handleClose = () => setActive(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=40')
      .then(response => response.json())
      .then((listOfPokemon: PokemonListAPI) => {
        Promise.all(listOfPokemon.results.map((pokemon: PokemonUrl) => 
          fetch(pokemon.url)
            .then(response => response.json())
            .then(singlePokemon => singlePokemon)
        ))
          .then((values: SinglePokemonData[]) => setData(values))
      })
      .catch(error => console.log(error.message))
    
    fetch('https://pokeapi.co/api/v2/evolution-chain/?limit=16')
      .then(response => response.json())
      .then((urls: EvolutionChainAPI) => {
        Promise.all(urls.results.map(evo => 
          fetch(evo.url)
            .then(response => response.json())
            .then(singleEvolutionData => singleEvolutionData)
        ))
          .then((values: SingleEvolutionData[]) => setEvolutionData(values))
      })
      .catch(error => console.log(error.message))
  }, [])

  // Format evolution chain data structure
  let evolutionChains = [] as EvolutionStage[][]
  evolutionData.forEach(chain => {
    let group = [] as EvolutionStage[]
    const recursion = (obj: EvolutionStageAPI) => {
      const idNum = +obj.species.url.slice(-4).replaceAll(/[s/]/g, '')
      group.push({
        name: obj.species.name,
        id: idNum,
        image: data?.find(({ id }) => id === idNum)?.sprites.other.dream_world.front_default
      })
      if (!obj.evolves_to[0]) return
      recursion(obj.evolves_to[0])
    }
    recursion(chain.chain)
    evolutionChains.push(group)
  })

  // Update activeEvolutionChain every time pokemon is clicked
  useEffect(() => {
    evolutionChains.forEach((chain: EvolutionStage[]) => {
      if (chain.find(({ id }) => id === active)) setActiveEvolutionChain(chain)
    })
  }, [active]) // eslint-disable-line

  return (
    <Screen>
      <GlobalStyle />
      <Header>
        <HeaderLogo src={logo} alt="logo" />
      </Header>
      <div>
        <Container fluid="md">
          <Row>
          {data.map(pokemon => (
            <Col xs={6} md={4} lg={3} key={pokemon.id}>
              <Card onClick={() => setActive(pokemon.id)}>
                <Image src={pokemon.sprites.other.dream_world.front_default} alt="" />
                <Name>{pokemon.name}</Name>
              </Card>
            </Col>
          ))}
          </Row>
        </Container>
      </div>
      <Details
        singlePokemonData={active !== null ? data[active - 1] : null} 
        active={active} 
        activeEvolutionChain={activeEvolutionChain}
        handleActive={setActive}
        handleClose={handleClose}
      />
    </Screen>
  )
}

export default App