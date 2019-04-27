import React from 'react';
import { Card, Col, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter } from 'react-router-dom';
import { deleteBook } from '../../API/Book'
import { MyContext } from './Admin-List';

class EditCard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            smShow: false,
            error: ''
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    handleDelete = (id,changeParentState) => (e) => {
        deleteBook(id)
            .then(res => { changeParentState() })
            .catch(err => { this.setState({ error: 'server error' }) })
    }
   
    render() {
        let smClose = () => this.setState({ smShow: false });
        return (
            <MyContext.Consumer>

                {value =>
                    (
                        <>
                            <Col className="m-2">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={this.props.cover} style={{ height: '20rem' }} />
                                    <Card.Body>
                                        <Card.Title><Link to={`/BookDetailes/${this.props.id}`}> {this.props.title}</Link>
                                            <Card.Text className="float-right">
                                                <FontAwesomeIcon className="mr-3" icon="edit" onClick={this.handleShow} />
                                                <FontAwesomeIcon icon="trash-alt" onClick={this.handleDelete(this.props.id,value.changeState)} />
                                            </Card.Text>
                                        </Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header>
                                    <Modal.Title>Edit Book</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form>
                                        <Form.Group >
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.title} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Author</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.author} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.category} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Pages</Form.Label>
                                            <Form.Control type="number" placeholder={this.props.pages} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows="3" placeholder={this.props.description} />
                                        </Form.Group>
                                    </Form>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                       </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                        Save Changes
                       </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal
                                size="sm"
                                show={this.state.smShow}
                                onHide={smClose}
                                aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        Delete
                                   </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Book Deleted!
                                    
                                </Modal.Body>
                            </Modal>
                        </>
                    )
                }
            </MyContext.Consumer>
        );
    }


}

export default withRouter(EditCard); 