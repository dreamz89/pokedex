import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import { ModalHeader, Top, Image, Types, Type, Middle, Title, List, Evolution, EvolutionTitle, Stage, EvolutionImage, Name } from './Styles'

function Details({ 
  singlePokemonData, 
  active, 
  activeEvolutionChain, 
  handleActive,
  handleClose
}) {
  return (
    <>
      <Modal 
        centered 
        show={active !== null} 
        onHide={handleClose}
      >
        <ModalHeader closeButton />
        <Modal.Body>
          <Top>
            <Image src={singlePokemonData?.sprites.other.dream_world.front_default} alt="" />
            <h5>#{singlePokemonData?.order.toLocaleString(undefined, {minimumIntegerDigits: 3, useGrouping:false})}</h5>
            <h5>{singlePokemonData?.name}</h5>
            <Types>
              {singlePokemonData?.types.map(kind => (
                <Type 
                  src={`/types/${kind.type.name}.svg`} 
                  alt={kind.type.name} 
                  key={kind.type.name}
                />
              ))}
            </Types>
          </Top>
          <Middle>
            <Col md={6}>
              <div>
                <Title>Abilities</Title>
                <List>
                  {singlePokemonData?.abilities.map(obj => 
                    <p key={obj.ability.name}>{obj.ability.name}</p>
                  )}
                </List>
              </div>
              <div>
                <Title>Moves</Title>
                <List>
                  {singlePokemonData?.types.map(obj => 
                    <p key={obj.type.name}>{obj.type.name}</p>
                  )}
                </List>
              </div>
            </Col>
            <Col>
              <div>
                <Title>Stats</Title>
                <List>
                  
                </List>
              </div>
            </Col>
          </Middle>
          <Evolution>
            <div>
              <EvolutionTitle>Evolution</EvolutionTitle>
            </div>
            <div>
              {activeEvolutionChain.map(stage => (
                <Stage onClick={() => handleActive(stage.id)}>
                  <EvolutionImage src={stage.image} alt="" />
                  <Name>{stage.name}</Name>
                </Stage>
              ))}
            </div>
          </Evolution>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Details


