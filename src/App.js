import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './pokemon-logo.svg'
import Details from './details/Details'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  h5 {
    font-weight: 700;
  }

  p {
    margin: 0;
  }
`

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

const Screen = styled.div`
  background-color: #29465b;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const HeaderLogo = styled.img`
  margin: 20px 0;
  max-width: 400px;
`

const Card = styled.div`
  background-color: white;
  border-radius: 4px;
  margin: 20px;
  padding: 15px;
  position: relative;
  transition: transform 100ms ease-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    cursor: pointer;
    transform: scale(1.05);
  }
`

const Image = styled.img`
  height: 200px;
  margin-bottom: 20px;
  width: 100%;
`

const Name = styled.h5`
  text-align: center;
`
