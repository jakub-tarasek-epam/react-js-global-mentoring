import { AppContext } from "context/context";
import { useContext } from "react";
import { Modal, CloseButton, Form, Row, Col } from "react-bootstrap";
import { Wrapper, Btn } from "./MovieModal.styles";

const MovieModal = () => {

    const { showMovieModal, setShowMovieModal, editableMovie } = useContext(AppContext);

    return (
        <>
            <Wrapper
                show={showMovieModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>{Object.keys(editableMovie).length === 0 ? "ADD MOVIE" : "EDIT MOVIE"}</Modal.Title>
                    <CloseButton variant="white" onClick={() => setShowMovieModal(false)}/>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" onChange={() => {}}  value={editableMovie.title} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="releaseDate">
                                <Form.Label>Release date</Form.Label>
                                <Form.Control type="date" placeholder="Select date" onChange={() => {}}  value={editableMovie.year} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="url">
                                <Form.Label>Movie URL</Form.Label>
                                <Form.Control placeholder="https://" onChange={() => {}} value={editableMovie.url} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="rating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control placeholder="7.8" onChange={() => {}}  value={editableMovie.rating} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="genre">
                                <Form.Label>Genre</Form.Label>
                                <Form.Select readOnly aria-label="Select genre" onChange={() => {}} >
                                    <option value="1">Crime</option>
                                    <option value="2">Documentary</option>
                                    <option value="3">Horror</option>
                                    <option value="4">Comedy</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="runtime">
                                <Form.Label>Runtime</Form.Label>
                                <Form.Control placeholder="minutes" onChange={() => {}}  value={editableMovie.duration} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="overview">
                                <Form.Label>Overview</Form.Label>
                                <Form.Control as="textarea" style={{ height: '200px', fontSize: '12px' }} placeholder="Movie description" onChange={() => {}}  value={editableMovie.desc} />
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Btn isOutline onClick={() => setShowMovieModal(false)}>
                            Reset
                        </Btn>
                        <Btn onClick={() => setShowMovieModal(false)}>
                            Submit
                        </Btn>
                    </Modal.Footer>
                </Form>
            </Wrapper>
        </>
    );
}

export default MovieModal;
