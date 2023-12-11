import './App.css';
import styled from 'styled-components';
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    <>
      <Header />
      <Main>
        <Card />
      </Main>
    </>
  )
}

export default App



const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
