/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect, useState } from 'react';
import styled from "styled-components";
import CardModal from './CardModal';


export default function Card({ query, apiUrl }) {

    const [characters, setCharacters] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [filteredCharacters, setFilteredCharacters] = useState([]);


    useEffect(() => {
        async function fetchData() {

          try {
            const response = await fetch(`${apiUrl}?name=${query}`);
            const data = await response.json();
      
            if (response.ok) {
              setCharacters(data.results);

            } else {
              console.error("Bad response");
            }
          } catch (error) {
            console.error("An error occurred", error);
          }
        }
      
        fetchData();
      }, [query, apiUrl]);
      


    useEffect(() => {
        const filtered = characters.filter((character) => {
            return character.name.toLowerCase().includes(query.toLowerCase());
        });

        setFilteredCharacters(query ? filtered : characters);
    }, [query, characters]);



    return (
        <Main>

            {filteredCharacters.map((character) => (

                <FlipCardWrapper key={character.id}>
                    <FlipCardInner> 
                        <FlipCardFront>
                            <img src={character.image} alt={`Picture of ${character.name}`}  />
                        </FlipCardFront>
                        <FlipCardBack>
                            <StyledTitle>{character.name}</StyledTitle>
                            {/* <p>{`Species: ${character.species}`}</p>
                            <p>{`Origin: ${character.origin.name}`}</p> */}
                            <Button onClick={() => {
                                setShowModal(true);
                                setSelectedCharacter(character);

                                // console.log("Button clicked!")
                            }}>Learn more</Button>
                            
                        </FlipCardBack>
                    </FlipCardInner>   
                </FlipCardWrapper>
                 ))}

                    {showModal && ( 

                        <CardModal 
                            characterImage={selectedCharacter && selectedCharacter.image}
                            characterName={selectedCharacter && selectedCharacter.name}
                            characterStatus={selectedCharacter && selectedCharacter.status}
                            characterSpecies={selectedCharacter && selectedCharacter.species}
                            characterOrigin={selectedCharacter && selectedCharacter.origin.name}
                            showModal={showModal}
                            setShowModal={setShowModal}
                            />
                    )}  
        </Main>
    );
}




// STYLING

const Main = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;

`;

// Flip Card Container: 
const FlipCardWrapper = styled.div `
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    margin: 2em;
`;


// FlipCardInner: Needed to position the front and back side and to create the 3D effect
// Creates a horizontal flip when you move over the flip box container => hover
const FlipCardInner = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform .8s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: .2em;
    _border: 1px solid #bbb;

    &:hover {
        transform: rotateY(180deg);  
    }
`;


// Position & style front side
const FlipCardFront = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #bbb;
`;


// Position & style back side
// backface-visibility: hidden/visible => An element's back face is a mirror image of its front face
const FlipCardBack = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: var(--color-accent);
    color: var(--text-color-dark);
    transform: rotateY(180deg);

`;


const StyledTitle = styled.h1`
    font-size: 2rem;
    margin: .7em .5em;    
`;


const Button = styled.button`
    margin: .2em 0 .4em;
    background-color: var(--text-color-dark);
    color: var(--color-accent);
    cursor: pointer;
    padding: 1em 1.5em;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: .5em;
    text-transform: uppercase;
    transition: 0.4s;
    box-shadow: var(--box-shadow);

    &:hover {

        transform: scale(1.05);
        transition: 0.4s;

    }
`;





