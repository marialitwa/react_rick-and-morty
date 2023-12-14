import './App.css';

import styled from 'styled-components';
import Card from './components/Card.jsx';
import SearchBar from './components/SearchBar.jsx';

export default function App() {

  return (
    <>
      <SearchBar />
      <Main>
        <Card />
      </Main>
    </>
  )
}



// STYLING

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
