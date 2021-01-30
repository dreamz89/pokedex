import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  h5, h6 {
    font-weight: 700;
  }

  p {
    margin: 0;
  }
`

export const Screen = styled.div`
  background-color: #29465b;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
`

export const HeaderLogo = styled.img`
  margin: 20px 0;
  max-width: 400px;
`

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
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

export const Image = styled.img`
  height: 200px;
  margin-bottom: 20px;
  width: 100%;
`

export const Name = styled.h5`
  text-align: center;
`