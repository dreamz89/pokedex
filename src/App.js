import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from './pokemon-logo.svg'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=40')
      .then(response => response.json())
      .then(listOfPokemon => {
        const pokemonContainer = []

        listOfPokemon.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(singlePokemon => pokemonContainer.push(singlePokemon))
        })
        
        setData(pokemonContainer)
      })
  }, [])

  return (
    <div className="App">
      <Header>
        <Image src={logo} alt="logo" />
      </Header>
    </div>
  );
}

export default App

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 50%;
`
