import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter } from 'react-router-dom';
import { deleteBook } from '../../API/Book'
import { MyContext } from './Admin-List';

class BookCard extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            show: false,
            error: ''
        };
    }

    handleDelete = (id, deleteBookFromList) => (e) => {
        deleteBook(id)
            .then(res => { deleteBookFromList(res) })
            .catch(err => { this.setState({ error: 'server error' }) })
    }
    handleEditBook = (bookId) => (e) => {
        this.props.history.push(`/admin/edit/book/${bookId}`);
    }
    render() {
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
                                                <FontAwesomeIcon className="mr-3" icon="edit" onClick={this.handleEditBook(this.props.id)} />
                                                <FontAwesomeIcon icon="trash-alt" onClick={this.handleDelete(this.props.id, value.deleteBookFromList)} />
                                            </Card.Text>
                                        </Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>


                        </>
                    )
                }
            </MyContext.Consumer>
        );
    }


}

export default withRouter(BookCard); 