import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function CardModal ({ characterName, characterStatus, setShowModal }) {

    const handleClose = () => {
        setShowModal(false)
    }

    return  (

        <StyledModal>
            <p>{characterName}</p>
            <p>{characterStatus}</p>
            <button onClick={handleClose}>Close</button>
         </StyledModal>
    );
}

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #EEE;
    background-color: #1B2A41;
    width: 400px;
    height: 500px;
    border: 3px solid black;
    border-radius: .8em;
`;