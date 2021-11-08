import { Modal, CloseButton } from "react-bootstrap";

import { Wrapper, Btn } from "./DeleteMovie.styles";

const DeleteMovie = ({handleHide, handleSubmit}) => {
    return (
        <>
            <Wrapper
                show={true}
                onHide={handleHide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>DELETE MOVIE</Modal.Title>
                    <CloseButton variant="white" onClick={handleHide}/>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this movie?
                </Modal.Body>
                <Modal.Footer>
                    <Btn variant="primary" onClick={handleSubmit}>Confirm</Btn>
                </Modal.Footer>
            </Wrapper>
        </>
    );
}

export default DeleteMovie;
