import React from 'react';
import EditCard from './Edit-Card';
import Books from '../../Books';
import Navbar from '../Shared/Navbar';
import { Row, Col, Card, Form, Modal, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addNewBook } from '../../API/Book';
class AddBook extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.state = {

            title: '',
            description: '',
            author: '',
            numOfPages: 0,
            category: '',
            cover: '',
            error: '',
            enteredDataValidation: ""
        };
    }

    handleChange = (e) => {
        const key = e.target.name;
        if (key !== 'numOfPages') {
            const value = e.target.value;
            this.setState({ [key]: value })
        }
        else {

            const pages = Number(e.target.value);
            this.setState({ [key]: pages })

        }

    }
    addNewBook = (e) => {
        e.preventDefault();
        const { title, author, description, numOfPages, category, cover } = this.state;
        if (title === '' || author === '' || description === '' || category === '')
            this.setState({ enteredDataValidation: 'title, author, description and category required' })
        else {
            addNewBook({ title, author, description, numOfPages, category, cover })
                .then(res => {
                    if (res === 'book already exist') {
                        this.setState({ enteredDataValidation: 'book already exist' })
                    }
                    else {
                        this.setState({ enteredDataValidation: '' })
                        this.props.history.push('/admin/books');
                    }
                })
                .catch(err => { this.setState({ error: 'server error' }) })
        }
    }

    render() {
        return (
            <>
                <Navbar></Navbar>
                <Row className="no-gutters" className="justify-content-md-center" >

                    <Card tag="div" className="text-center" style={{ width: '30rem' }}>
                        <Card.Header>Add Book!</Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.addNewBook}>
                                <Form.Group >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" name="author" onChange={this.handleChange} value={this.state.author} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" name="category" onChange={this.handleChange} value={this.state.category} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Pages</Form.Label>
                                    <Form.Control type="number" name="numOfPages" onChange={this.handleChange} value={this.state.numOfpages} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="description" onChange={this.handleChange} value={this.state.description} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>cover</Form.Label>
                                    <Form.Control type="text" name="cover" onChange={this.handleChange} value={this.state.cover} />
                                </Form.Group>
                                <Form.Text style={{ color: 'darkred', fontWeight: 'bold' }}>{this.state.enteredDataValidation}</Form.Text>
                                <Button variant="primary" size="lg" block onClick={this.addNewBook}>
                                    Add
                       </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </>

        );
    }
}

export default withRouter(AddBook);