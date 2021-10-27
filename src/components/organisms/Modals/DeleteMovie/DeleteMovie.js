import { AppContext } from "context/context";
import { useContext } from "react";
import { Modal, CloseButton } from "react-bootstrap";

import { Wrapper, Btn } from "./DeleteMovie.styles";

const DeleteMovie = () => {
    const { showDeleteModal, setShowDeleteModal } = useContext(AppContext);
    return (
        <>
            <Wrapper
                show={showDeleteModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>DELETE MOVIE</Modal.Title>
                    <CloseButton variant="white" onClick={() => setShowDeleteModal(false)}/>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this movie?
                </Modal.Body>
                <Modal.Footer>
                    <Btn variant="primary" onClick={() => setShowDeleteModal(false)}>Confirm</Btn>
                </Modal.Footer>
            </Wrapper>
        </>
    );
}

export default DeleteMovie;
