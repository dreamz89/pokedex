import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './pokemon-logo.svg'
import Details from './details/Details'
import { GlobalStyle, Screen, Header, HeaderLogo, Card, Image, Name } from './AppStyles'

function App() {
  const [data, setData] = useState([])
  const [active, setActive] = useState(null)

  const handleClose = () => setActive(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=40')
      .then(response => response.json())
      .then(listOfPokemon => {

        Promise.all(listOfPokemon.results.map(pokemon => 
          fetch(pokemon.url)
            .then(response => response.json())
            .then(singlePokemon => singlePokemon)
        ))
          .then(values => setData(values))
      })
      .catch(error => console.log(error.message))
  }, [])

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
        active={active} 
        handleClose={handleClose} 
        singlePokemonData={data[active - 1]} 
      />
    </Screen>
  );
}

export default App