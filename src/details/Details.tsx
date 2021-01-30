import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ModalHeader, Top, Image, Types, Type, Title, List, ListMoves, RowStat, ColLabel, ColBar, Bar, Evolution, EvolutionTitle, Stage, EvolutionImage, Name } from './Styles'
import { Props } from './Types'

function Details({ 
  singlePokemonData, 
  active, 
  activeEvolutionChain, 
  handleActive,
  handleClose
}: Props) {
  return (
    <>
      <Modal 
        centered 
        show={active !== null} 
        onHide={handleClose}
        dialogClassName="modal-80w"
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
          <div>
            <Row>
              <Col xs={3}>
                <Title>Abilities</Title>
                <List>
                  {singlePokemonData?.abilities.map(obj => 
                    <p key={obj.ability.name}>{obj.ability.name}</p>
                  )}
                </List>
              </Col>
              <Col xs={9}>
                <Title>Stats</Title>
                <List>
                  {singlePokemonData?.stats.map(obj => 
                    <RowStat>
                      <ColLabel md={5}>
                        <p key={obj.stat.name}>{obj.stat.name}</p>
                      </ColLabel>
                      <ColBar md={7}>
                        <Bar width={obj.base_stat}></Bar>
                        <p>{obj.base_stat}</p>
                      </ColBar>
                    </RowStat>
                  )}
                </List>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Title>Moves</Title>
                <ListMoves>
                  {singlePokemonData?.moves.map(obj => 
                    <p key={obj.move.name}>{obj.move.name}</p>
                  )}
                </ListMoves>
              </Col>
            </Row>
          </div>
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


