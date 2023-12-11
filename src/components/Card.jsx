/* eslint-disable react/prop-types */
// import React from 'react'
import data from '../data.js';

const characters = data.results;

function Card() {

    return (
        <>
            {characters.map((character) => (

                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={`Picture of ${character.name}`}  />
                </div>
            ))}
    
        </>

    );
}

export default Card;


