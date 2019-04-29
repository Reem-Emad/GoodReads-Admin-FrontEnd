import React from 'react';
import Navbar from '../Shared/Navbar';
import { Row, Card, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { addNewBook, editBook, getBooksById } from '../../API/Book';
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
            enteredDataValidation: "",
            formHeader: '',
            formButton: '',
            formStatus: ''
        };
    }
    componentDidMount = () => {
        const bookId = this.props.match.params.id;
        if (bookId) {
            this.setState({ formHeader: "Edit Book!", formButton: "Edit", formStatus: "edit" })

            getBooksById(bookId)
                .then(res => {

                    this.setState({
                        title: res.title,
                        description: res.description,
                        author: res.author,
                        numOfPages: res.numOfPages,
                        category: res.category,
                        cover: res.cover
                    })
                })
                .catch(err => { this.setState({ error: 'server error' }) })
        }
        else {
            this.setState({ formHeader: "Add Book!", formButton: "Add", formStatus: "add" })

        }
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
    handleSubmit = (e) => {
        e.preventDefault();
        const { title, author, description, numOfPages, category, cover } = this.state;
        if (this.state.formStatus === "add") {
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
        else {
            const id = this.props.match.params.id;
            editBook({ id, title, author, description, numOfPages, category, cover })
                .then(res => {
                    this.setState({ enteredDataValidation: '' })
                    this.props.history.push('/admin/books');
                })
                .catch(err => { this.setState({ error: 'server error' }); debugger; })
        }
    }

    render() {
        return (
            <>
                <Navbar></Navbar>
                <Row className="no-gutters" className="no-gutters justify-content-md-center" >
                    <Card tag="div" className="text-center" style={{ width: '30rem' }}>
                        <Card.Header>{this.state.formHeader}</Card.Header>
                        <Card.Body>
                            
                                <Form onSubmit={this.handleSubmit}>

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
                                    <Button variant="primary" size="lg" block onClick={this.handleSubmit}>
                                        {this.state.formButton}
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