import React from "react";
import { Modal, CloseButton, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { Wrapper, Btn } from "./MovieModal.styles";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.tagline) {
    errors.tagline = "Required";
  }
  if (!values.poster_path) {
    errors.poster_path = "Required";
  } else if (
    !/^(ht|f)tp(s?):\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-.?,'/\\+&amp;%$#_]*)?$/i.test(
      values.poster_path
    )
  ) {
    errors.poster_path = "Should be valid URL";
  }
  if (!values.overview) {
    errors.overview = "Required";
  }
  if (!values.genres) {
    errors.genres = "Required";
  }
  if (!values.runtime) {
    errors.runtime = "Required";
  } else if (values.runtime < 0) {
    errors.runtime = "Runtime should be positive";
  }
  if (values.vote_average && !/^\d+(\.\d{1,2})?$/i.test(values.vote_average)) {
    errors.vote_average = "Should be number";
  }

  return errors;
};

const MovieModal = ({ movieData, handleHide, handleSubmit }) => {
    console.log(movieData);
  const formikInstance = useFormik({
    initialValues: {
      ...movieData,
    },
    validate,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  return (
    <>
      <Wrapper
        show={true}
        onHide={handleHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {Object.keys(movieData).length === 0 ? "ADD MOVIE" : "EDIT MOVIE"}
          </Modal.Title>
          <CloseButton variant="white" onClick={handleHide} />
        </Modal.Header>
        <Form onSubmit={formikInstance.handleSubmit}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="title">
                <Form.Label>Title*</Form.Label>
                <Form.Control
                  placeholder="Title"
                  value={formikInstance.values.title || ""}
                  onChange={formikInstance.handleChange}
                  isValid={
                    formikInstance.touched.title && !formikInstance.errors.title
                  }
                  isInvalid={!!formikInstance.errors.title}                  
                />
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.title}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="tagline">
                <Form.Label>Tag line*</Form.Label>
                <Form.Control
                  placeholder="Tag line"
                  onChange={formikInstance.handleChange}
                  value={formikInstance.values.tagline || ""}
                  isValid={
                    formikInstance.touched.tagline &&
                    !formikInstance.errors.tagline
                  }
                  isInvalid={!!formikInstance.errors.tagline}
                />
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.tagline}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="poster_path">
                <Form.Label>Movie URL*</Form.Label>
                <Form.Control
                  placeholder="https://"
                  value={formikInstance.values.poster_path || ""}
                  onChange={formikInstance.handleChange}
                  isValid={
                    formikInstance.touched.poster_path &&
                    !formikInstance.errors.poster_path
                  }
                  isInvalid={!!formikInstance.errors.poster_path}
                />
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.poster_path}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="vote_average">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  placeholder="7.8"
                  value={formikInstance.values.vote_average || 0}
                  type="number"
                  onChange={formikInstance.handleChange}
                  isValid={
                    formikInstance.touched.vote_average &&
                    !formikInstance.errors.vote_average
                  }
                  isInvalid={!!formikInstance.errors.vote_average}
                />
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.vote_average}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="genres">
                <Form.Label>Genres*</Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  placeholder="Select genres"
                  value={formikInstance.values.genres}
                  onChange={formikInstance.handleChange}
                  isInvalid={!!formikInstance.errors.genres}
                >
                  <option value="Crime">Crime</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Horror">Horror</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Romance">Romance</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.genres}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="runtime">
                <Form.Label>Runtime*</Form.Label>
                <Form.Control
                  placeholder="minutes"
                  value={formikInstance.values.runtime || 0}
                  type="number"
                  onChange={formikInstance.handleChange}
                  isValid={
                    formikInstance.touched.runtime &&
                    !formikInstance.errors.runtime
                  }
                  isInvalid={!!formikInstance.errors.runtime}
                />
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.runtime}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="release_date">
                <Form.Label>Release date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Select date"
                  value={formikInstance.values.release_date || new Date()}
                  onChange={formikInstance.handleChange}
                  isValid={
                    formikInstance.touched.release_date &&
                    !formikInstance.errors.release_date
                  }
                  isInvalid={!!formikInstance.errors.release_date}
                />
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.release_date}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="overview">
                <Form.Label>Overview*</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  placeholder="Movie description"
                  value={formikInstance.values.overview || ""}
                  onChange={formikInstance.handleChange}
                  isValid={formikInstance.touched.overview && !formikInstance.errors.overview}
                  isInvalid={!!formikInstance.errors.overview}
                />
                <Form.Control.Feedback type="invalid">
                  {formikInstance.errors.overview}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Btn onClick={handleHide}>
              Reset
            </Btn>
            <Btn variant="primary" type="submit">Submit</Btn>
          </Modal.Footer>
        </Form>
      </Wrapper>
    </>
  );
};

export default MovieModal;
