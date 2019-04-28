import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyContext } from '../../App';
import SimpleSchema from 'simpl-schema';


class EditCard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            smShow: false,
            name: '',
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        const validationContext = new SimpleSchema({
            name: {
                type: String,
                min: 2,
                max: 50,

            }
        }).newContext();
        validationContext.validate({ name });
        console.log(validationContext.validationErrors());
    }



    render() {
        let smClose = () => this.setState({ smShow: false });
        return (
            <MyContext.Consumer>
                {
                    value => (

                        <>
                            <Col className="m-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={this.props.image} style={{ height: '20rem' }} />
                                    <Card.Body>
                                        <Card.Title><Link to={`/AuthorDetailes/${this.props.id}`}>{this.props.name}</Link>
                                            <Card.Text className="float-right">
                                                <FontAwesomeIcon className="mr-3" icon="edit" onClick={this.handleShow} />
                                                <FontAwesomeIcon icon="trash-alt" onClick={() => this.setState({ smShow: true })} />
                                            </Card.Text>
                                        </Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header>
                                    <Modal.Title>Edit Author</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder={this.props.name} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Number of books</Form.Label>
                                            <Form.Control type="number" placeholder={this.props.authorDetails.NumberOfBooks} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Number Of Friends</Form.Label>
                                            <Form.Control type="number" placeholder={this.props.authorDetails.NumberOfFriends} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Place of birth</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.authorDetails.Born} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Website</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.authorDetails.Website} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Influences</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.authorDetails.Influences} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Genre</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.authorDetails.Genre} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Member Since</Form.Label>
                                            <Form.Control type="text" placeholder={this.props.authorDetails.MemberSince} />
                                        </Form.Group>

                                        <Form.Group >
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows="3" placeholder={this.props.Description} />
                                        </Form.Group>
                                    </Form>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                       </Button>
                                    <Button type="submit" variant="primary" onClick={this.handelSave}>
                                        Save Changes
                       </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal
                                size="sm"
                                show={this.state.smShow}
                                onHide={smClose}
                                aria-labelledby="example-modal-sizes-title-sm"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        Delete
            </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Author Deleted!
          </Modal.Body>
                            </Modal>
                        </>
                    )
                }
            </MyContext.Consumer>

        );
    }


}

export default EditCard; 