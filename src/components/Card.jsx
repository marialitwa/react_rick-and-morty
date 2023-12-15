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
                            <h2>{character.name}</h2>
                            <p>{`Species: ${character.species}`}</p>
                            <p>{`Origin: ${character.origin.name}`}</p>
                            <button onClick={() => {
                                setShowModal(true);
                                setSelectedCharacter(character);

                                // console.log("Button clicked!")
                            }}>Learn more</button>
                            
                        </FlipCardBack>
                    </FlipCardInner>   
                </FlipCardWrapper>
                 ))}

                    {showModal && ( 

                <ModalWrapper>
                        <CardModal 
                            // text={"Modal Text"}
                            characterImage={selectedCharacter && selectedCharacter.image}
                            characterName={selectedCharacter && selectedCharacter.name}
                            characterStatus={selectedCharacter && selectedCharacter.status}
                            showModal={showModal}
                            setShowModal={setShowModal}
                            />
               </ModalWrapper>
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
    _border: 3px solid red;
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
    color: black;
    _border: 3px solid yellow;

`;
// backface-visibility: hidden/visible => An element's back face is a mirror image of its front face


// Position & style back side
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
    background-color: #CABDC3;
    color: #1b2a41;
    transform: rotateY(180deg);

`;

const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, .2);
`;





