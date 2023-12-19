import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function CardModal ({ characterImage, characterName, characterStatus, characterSpecies, characterOrigin, setShowModal }) {

    const handleClose = () => {
        setShowModal(false)
    }

    return  (   
        <ModalWrapper>
            <Modal>
                <CharacterName>{characterName}</CharacterName>
                <Image src={characterImage} alt={`Picture of ${characterImage}`} />
                <Bodytext>{`Status: ${characterStatus}`}</Bodytext>
                <Bodytext>{`Species: ${characterSpecies}`}</Bodytext>
                <Bodytext>{`Origin: ${characterOrigin}`}</Bodytext>
                <Button onClick={handleClose}>X</Button>
            </Modal>
         </ModalWrapper>
    );
}



// STYLING
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
    background-color: rgba(0, 0, 0, .3);
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-color-dark);
    background-color: #BAFFE7;
    width: 400px;
    height: 500px;
    border-radius: .2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .5);
    position: relative;
`;


const CharacterName = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1em;

`;

const Image = styled.img`
    height: 250px;
    margin-bottom: 2em;
    border-radius: 50%;
    box-shadow: var(--box-shadow);
`;

const Bodytext = styled.p`
    font-weight: 500;
    line-height: 1.7;
`;

const Button = styled.button`
    margin-bottom: .3em;
    background-color: transparent;
    cursor: pointer;
    _padding: 0.5em 1em;
    border: none;
    font-size: 1.5rem;
    color: var(--text-color-dark);
    font-weight: 500;
    position: absolute;
    top: 18px;
    right: 20px;
`;


