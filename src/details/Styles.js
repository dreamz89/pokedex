import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'

export const ModalHeader = styled(Modal.Header)`
  border-bottom: unset;
  padding: 15px 15px 0 0;
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  margin-bottom: 20px;
  max-width: 200px;
`

export const Types = styled.div`
  display: flex;
`

export const Type = styled.img`
  margin: 0 5px 20px 5px;
  height: 30px;
  width: 30px;
`

export const Middle = styled.div`
  display: flex;
`

export const Title = styled.h6`
  border-left: 3px solid #2b72b9;
  padding-left: 10px;
`

export const List = styled.div`
  margin-bottom: 15px;
  padding-left: 10px;
`

export const Evolution = styled.div`
  background-color: #29465b;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 15px 28px;

  > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const EvolutionTitle = styled.h6`
  color: white;
  margin-bottom: 15px;
`

export const Stage = styled.div`
  cursor: pointer;
  text-align: center;
`

export const EvolutionImage = styled.img`
  margin-bottom: 10px;
  max-width: 80px;

  &:hover {
    transform: scale(1.1);
  }
`

export const Name = styled.p`
  color: white;
  margin: 0;
`