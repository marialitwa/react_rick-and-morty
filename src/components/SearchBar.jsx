/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";


export default function SearchBar( { handleInputChange }) {

  const [value, setValue] = useState("")

  return (
    <>
        <Form onSubmit={(event) => {event.preventDefault(); handleInputChange(value) }}>
          <label htmlFor="query"></label>
          <Input 
            type="search" 
            id="query"
            name="query"
            onChange={(event) => {setValue(event.target.value)}}
            placeholder="Search  for  characters ..."
            aria-label="Search"     
          />
        </Form>
    </>
  );
}




// STYLING
const Form = styled.form`
  margin-bottom: 3em;
`;

const Input = styled.input`
  width: 40vw;
  height: 50px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: .15rem solid var(--color-accent);
  color: var(--color-accent);
  font-size: 1.8rem;
  font-weight: 900;
  padding-left: 5px;
  letter-spacing: .1rem;

  &::placeholder {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    color: var(--color-accent);
    opacity: .7;
    font-weight: 600;
    -webkit-text-stroke: 1px var(--text-color-dark);
  }
`;






