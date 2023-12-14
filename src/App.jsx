import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Card from './components/Card.jsx';
import SearchBar from './components/SearchBar.jsx';

const apiUrl = "https://rickandmortyapi.com/api/character/"

export default function App() {

  const [query, setQuery] = useState("");

  function handleInputChange(value) {
   
    setQuery(value);
  }

  return (
    <>
      <SearchBar handleInputChange={handleInputChange}/>
      <Main>
        <Card query={query} apiUrl={apiUrl} />
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
