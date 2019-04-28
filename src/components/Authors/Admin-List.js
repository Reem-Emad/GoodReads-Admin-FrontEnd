import React from 'react';
import EditCard from './Edit-Card';
import { Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyContext } from '../../App';
import Navbar from '../Shared/Navbar';
import { getAuthors } from '../../API/Author'
class AdminAuthorsList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            AllAuthor: [],
            show: false
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    componentDidMount() {
        getAuthors()
            .then(res => {
                this.setState({ AllAuthor: res });
            })
            .catch(err => {
                this.setState = { error: "Server Error" }
            })

    }
    render() {
        return (
            // <MyContext.Consumer>
            //     {value => (
            <>
                <Navbar></Navbar>
                <Row className="no-gutters">
                    <Col key="0" className="m-3">
                        <Card style={{ width: '18rem' }} onClick={this.handleShow}>
                            <Card.Img style={{ height: '20rem' }} variant="top" src="https://memegene.net/sites/default/files/wallpaper/customer-clipart/413485/customer-clipart-end-user-413485-4676069.png" />
                            <Card.Body>
                                <Card.Title>Add Author
                                <FontAwesomeIcon className="float-right" icon="plus" />
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    {this.state.AllAuthor.map(a => <EditCard key={a.id} id={a.id} image={a.Image} name={a.Name} description={a.Dscription}
                        NumberOfBooks={a.NumberOfBooks} NumberOfFriends={a.NumberOfFriends} born={a.Born} website={a.Website}
                        influences={a.Influences} member={a["Member Since"]} />)}

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title>Add Author</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                <Form.Group >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Number of books</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Number Of Friends</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Place of birth</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Influences</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Member Since</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                                   </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Add
                                    </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </>
            // )}
            // </MyContext.Consumer>

        );
    }
}

export default AdminAuthorsList;