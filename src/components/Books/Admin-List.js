import React from 'react';
import EditCard from './Edit-Card';
import Books from '../../Books';
import Navbar from '../Shared/Navbar';
import { Row, Col, Card, Form, Modal,Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class AdminBooksList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
            <Navbar></Navbar>
            <Row className="no-gutters">
                <Col key="0" className="m-3">
                    <Card style={{ width: '18rem' }} onClick={this.handleShow}>
                        <Card.Img style={{ height: '20rem' }} variant="top" src="data:image/png;base64,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" />
                        <Card.Body>
                            <Card.Title>Add Book
                            <FontAwesomeIcon className="float-right" icon="plus"/>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                {Books.map(b => <EditCard key={b.id} id={b.id} cover={b.cover} title={b.title} description={b.description}
                    author={b.author} category={b.category} pages={b.pages} />)}

                <Modal key={Math.random()} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Pages</Form.Label>
                                <Form.Control type="number" />
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

        );
    }
}

export default AdminBooksList;