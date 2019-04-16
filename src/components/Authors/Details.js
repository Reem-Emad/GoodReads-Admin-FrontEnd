import React from 'react';
import author from '../../Authors';
import Navbar from '../Shared/Navbar';
import './Style.css';
import { Dropdown, Row, Container, Col, Card, Button, ButtonGroup, ListGroup,ListGroupItem } from 'react-bootstrap';
class AuthorDetails extends React.Component {
    render() {
        const id = this.props.match.params.id;
        console.log(id);
        let Author = author.find((a) => {
            return (a.id === id);
        });
        console.log(Author);
        return (
            <>
            <Navbar></Navbar>
                <Container className="detailedCard">
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="3">
                            <Card style={{ width: '15rem', height: '20rem' }}>
                                <Card.Img className="imgMargin" variant="top" src={Author.Image} />
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="success">Follow Author</Button>

                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                    <Dropdown.Menu>
                                        <Dropdown.Item hred="#/action-1">Add As a Friend</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-2">Send Message</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-3">Compare Books</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-3">Add to My Favorite Authors</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-3">Edit My Favorite Authors</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-3">See All Authors I Follow</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card>
                        </Col>

                        <Col sm="8">
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>{Author.Name}</Card.Title>
                                    <Card.Text>
                                      {Author.Website}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{Author.NumberOfFriends} Friends</ListGroupItem>
                                    <ListGroupItem>{Author.NumberOfBooks} Books</ListGroupItem>
                                    <ListGroupItem>{Author.Influences}</ListGroupItem>
                                    <ListGroupItem>{Author.Genre}</ListGroupItem>
                                    <ListGroupItem>{Author.Born}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                   {Author.Dscription}
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </>
        )

    }
}
export default AuthorDetails;