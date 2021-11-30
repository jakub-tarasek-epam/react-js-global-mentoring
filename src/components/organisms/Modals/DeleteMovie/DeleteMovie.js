import { Modal, CloseButton, Form } from "react-bootstrap";
import { useFormik } from "formik";

import { Wrapper, Btn } from "./DeleteMovie.styles";

const DeleteMovie = ({handleHide, handleSubmit, movieData}) => {

    const formikInstance = useFormik({
        initialValues: {
            ...movieData,
        },
        onSubmit: values => {
            handleSubmit(values);
        }
    })

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
                    <Form onSubmit={formikInstance.handleSubmit}>
                        <Btn variant="primary" type="submit">Confirm</Btn>
                    </Form>
                </Modal.Footer>
            </Wrapper>
        </>
    );
}

export default DeleteMovie;
