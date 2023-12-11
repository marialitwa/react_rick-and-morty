/* eslint-disable react/prop-types */
// import React from 'react'
// import data from '../data.js';
import { useEffect, useState } from 'react';
import styled from "styled-components";

// const characters = data.results;
const apiUrl = "https://rickandmortyapi.com/api/character/"


function Card() {

    const [characters, setCharacters] = useState([]);

    async function fetchData() {

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            console.log(data)

            if (response.ok) {
                setCharacters(data.results)
            } else {
                console.error("Bad response")
            }
            
        } catch (error) {

            console.error("An error occured", error);
            
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            {characters.map((character) => (

                <FlipCardWrapper key={character.id}>
                    <FlipCardInner> 
                        <FlipCardFront>
                            <img src={character.image} alt={`Picture of ${character.name}`}  />
                        </FlipCardFront>
                        <FlipCardBack>
                            <h2>{character.name}</h2>
                            <p>Some more text</p>
                            <button>Learn more</button>
                        </FlipCardBack>
                    </FlipCardInner>   
                </FlipCardWrapper>
            ))}
        </>

    );
}

export default Card;


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
`;

// backface-visibility: hidden/visible => An element's back face is a mirror image of its front face


// Position & style back side
const FlipCardBack = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #6d6875;
    color: whitesmoke;
    transform: rotateY(180deg);
`;


