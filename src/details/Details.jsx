import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Top, Image, Types, Type } from './Styles'

function Details({ singlePokemonData, active, handleClose }) {
  return (
    <>
      <Modal 
        centered 
        show={active !== null} 
        onHide={handleClose}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Top>
            <Image src={singlePokemonData?.sprites.other.dream_world.front_default} alt="" />
            <h5>#{singlePokemonData?.order.toLocaleString(undefined, {minimumIntegerDigits: 3, useGrouping:false})}</h5>
            <h5>{singlePokemonData?.name}</h5>
            <Types>
              {singlePokemonData?.types.map(kind => (
                <Type src={`/types/${kind.type.name}.svg`} alt="" />
              ))}
            </Types>
          </Top>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Details


