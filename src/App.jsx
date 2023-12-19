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
      <Title>Rick & Morty Cards</Title>
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

const Title = styled.h1`
  font-size: 3.5em;
  letter-spacing: 0.1em;
  margin: 0.2em 0 .8em;
  color: var(--text-color-dark);
  text-transform: uppercase;
  -webkit-text-stroke: 2px var(--color-accent);
  

`;

