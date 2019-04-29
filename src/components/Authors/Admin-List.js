import React from 'react';
import EditCard from './Edit-Card';
import { Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Shared/Navbar';
import { getAuthors } from '../../API/Author';
import { AddNewAuthor } from '../../API/Author';
export const MyContext = React.createContext({});
class AdminAuthorsList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.handelSave = this.handelSave.bind(this);
        this.setName = this.setName.bind(this);
        this.setNumOfBooks = this.setNumOfBooks.bind(this);
        this.setNumOfFriends = this.setNumOfFriends.bind(this);
        this.setPlaceOfBirth = this.setPlaceOfBirth.bind(this);
        this.setImage = this.setImage.bind(this);
        this.setWebsite = this.setWebsite.bind(this);
        this.setInfl = this.setInfl.bind(this);
        this.setMemberS = this.setMemberS.bind(this);
        this.setDesc = this.setDesc.bind(this);
        this.deleteAuthorFromList = this.deleteAuthorFromList.bind(this);
        // this.editAuthorFromList = this.editAuthorFromList.bind(this);


        this.state = {
            AllAuthor: [],
            show: false,
            authorName: '',
            numberOfBooks: 0,
            numberOfFriends: 0,
            PlaceOfBirth: '',
            AuthorImage: '',
            Website: '',
            Influences: '',
            MemberSince: '',
            Description: ''
        };
    }
    setName(e) {
        this.setState({ authorName: e.target.value })
    }
    setImage(e) {
        this.setState({ AuthorImage: e.target.value })
    }
    setPlaceOfBirth(e) {
        this.setState({ PlaceOfBirth: e.target.value })
    }
    setInfl(e) {
        this.setState({ Influences: e.target.value })
    }
    setNumOfBooks(e) {
        this.setState({ numberOfBooks: e.target.value })
    }
    setNumOfFriends(e) {
        this.setState({ numberOfFriends: e.target.value })
    }
    setMemberS(e) {
        this.setState({ MemberSince: e.target.value })
    }
    setWebsite(e) {
        this.setState({ Website: e.target.value })
    }
    setDesc(e) {
        this.setState({ Description: e.target.value })
    }
    handelSave() {
        const { authorName, AuthorImage, numberOfFriends, numberOfBooks, PlaceOfBirth, Website, Influences, MemberSince, Description } = this.state;
        const gnere = "";
        AddNewAuthor({ FullName: authorName, Image: AuthorImage, NumberOfFriends: Number(numberOfFriends), NumberOfBooks: Number(numberOfBooks), Born: PlaceOfBirth, Website: Website, Genre: gnere, Influences: Influences, MemberSince: MemberSince, Description: Description })
            .then(res => {
                console.log(res);
                this.toggle();

            })
            .catch(err => {
                console.log(err)
            })
        // window.location.reload();
        //  console.log(this.state.authorName, this.state.AuthorImage, this.state.numberOfFriends, this.state.numberOfBooks, this.state.PlaceOfBirth, this.state.Website, "", this.state.Influences, this.state.MemberSince, this.state.Description)
    }
    toggle() {
        this.setState({
            show: !this.state.show
        });
    }
    handelSubmit(event) {
        event.preventDefault();
        console.log(event)
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
    deleteAuthorFromList = (deletedAuthor) => {
        const newArray = this.state.AllAuthor.filter(a => {
            return a._id !== deletedAuthor._id
        })
        this.setState({ AllAuthor: newArray });
    }
    // editAuthorFromList = (editedAuthor) => {
    //     const newArray = this.state.AllAuthor.filter(a => {
    //        return a._id === editedAuthor._id
    //         a = editedAuthor;
    //     })
    //     this.setState({ AllAuthor: newArray });
    // }
    render() {
        const value = {
            state: this.state,
            deleteAuthorFromList: this.deleteAuthorFromList,
            // editAuthorFromList: this.editAuthorFromList
        }
        return (
            <MyContext.Provider value={value}>
                <>
                    <Navbar></Navbar>
                    <Row className="no-gutters">
                        <Col key="0" className="m-3">
                            <Card style={{ width: '18rem' }} onClick={this.toggle}>
                                <Card.Img style={{ height: '20rem' }} variant="top" src="https://memegene.net/sites/default/files/wallpaper/customer-clipart/413485/customer-clipart-end-user-413485-4676069.png" />
                                <Card.Body>
                                    <Card.Title>Add Author
                                <FontAwesomeIcon className="float-right" icon="plus" />
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        {this.state.AllAuthor.map(a => <EditCard key={a._id} id={a._id} image={a.Image} name={a.FullName} authorDetails={a} />)}

                        <Modal show={this.state.show} onHide={this.toggle}>
                            <Modal.Header>
                                <Modal.Title>Add Author</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <Form onSubmit={this.handelSubmit}>
                                    <Form.Group >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control value={this.state.authorName} onChange={this.setName} type="text" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Number of books</Form.Label>
                                        <Form.Control value={this.state.numberOfBooks} onChange={this.setNumOfBooks} type="number" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Number Of Friends</Form.Label>
                                        <Form.Control value={this.state.numberOfFriends} onChange={this.setNumOfFriends} type="number" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Place of birth</Form.Label>
                                        <Form.Control value={this.state.PlaceOfBirth} onChange={this.setPlaceOfBirth} type="text" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Author Image</Form.Label>
                                        <Form.Control value={this.state.AuthorImage} onChange={this.setImage} type="text" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control value={this.state.Website} onChange={this.setWebsite} type="text" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Influences</Form.Label>
                                        <Form.Control value={this.state.Influences} onChange={this.setInfl} type="text" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Member Since</Form.Label>
                                        <Form.Control value={this.state.MemberSince} onChange={this.setMemberS} type="text" />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control value={this.state.Description} onChange={this.setDesc} as="textarea" rows="3" />
                                    </Form.Group>
                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.toggle}>
                                    Close
                                   </Button>
                                <Button variant="primary" onClick={this.handelSave}>
                                    Add
                                    </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </>
            </MyContext.Provider>
        );
    }
}

export default AdminAuthorsList;