import styled from "styled-components";


export default function SearchBar() {
  return (
    <>
      
        <Form>
          <Input 
            type="search" 
            placeholder="Search for characters"
            aria-label="Search"
          />
        </Form>
    </>
  )
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
  border-bottom: .15rem solid black;

  &::placeholder {
    font-size: 1rem;
    letter-spacing: .04rem;
    padding-left: .4em;
  }


`;






