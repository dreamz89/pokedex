import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import { ModalHeader, Top, Image, Types, Type, Middle, Title, List, RowStat, ColLabel, ColBar, Bar, Evolution, EvolutionTitle, Stage, EvolutionImage, Name } from './Styles'

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
            <Col xs={3} md={4}>
              <Title>Abilities</Title>
              <List>
                {singlePokemonData?.abilities.map(obj => 
                  <p key={obj.ability.name}>{obj.ability.name}</p>
                )}
              </List>
              <Title>Moves</Title>
              <List>
                {singlePokemonData?.types.map(obj => 
                  <p key={obj.type.name}>{obj.type.name}</p>
                )}
              </List>
            </Col>
            <Col xs={9} md={8}>
              <Title>Stats</Title>
              <List>
                {singlePokemonData?.stats.map(obj => 
                  <RowStat>
                    <ColLabel md={6}>
                      <p key={obj.stat.name}>{obj.stat.name}</p>
                    </ColLabel>
                    <ColBar md={6}>
                      <Bar width={obj.base_stat}></Bar>
                      <p>{obj.base_stat}</p>
                    </ColBar>
                  </RowStat>
                )}
              </List>
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


