import styled from 'styled-components'
import logo from './pokemon-logo.svg'

function App() {
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
