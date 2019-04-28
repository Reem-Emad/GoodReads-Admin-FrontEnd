import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyContext } from '../../App';
import SimpleSchema from 'simpl-schema';
import { EditAuthor, DeleteAuthor } from '../../API/Author'

class EditCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
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
        this.handelDelete = this.handelDelete.bind(this);
        this.handelDeletePop = this.handelDeletePop.bind(this);
        this.state = {
            show: false,
            smShow: false,
            name: '',
            authorName: this.props.authorDetails.FullName,
            numberOfBooks: this.props.authorDetails.NumberOfBooks,
            numberOfFriends: this.props.authorDetails.NumberOfFriends,
            PlaceOfBirth: this.props.authorDetails.Born,
            AuthorImage: this.props.authorDetails.Image,
            Website: this.props.authorDetails.Website,
            Influences: this.props.authorDetails.Influences,
            MemberSince: this.props.authorDetails.MemberSince,
            Description: this.props.authorDetails.Description
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
    toggle() {
        this.setState({
            show: !this.state.show
        });
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handelDeletePop() {
        this.setState({ smShow: !this.state.smShow })
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

    handelSave() {
        const { authorName, AuthorImage, numberOfFriends, numberOfBooks, PlaceOfBirth, Website, Influences, MemberSince, Description } = this.state;
        const gnere = "";
        EditAuthor(this.props.id, { FullName: authorName, Image: AuthorImage, NumberOfFriends: Number(numberOfFriends), NumberOfBooks: Number(numberOfBooks), Born: PlaceOfBirth, Website: Website, Genre: gnere, Influences: Influences, MemberSince: MemberSince, Description: Description })
            .then(res => {
                console.log(res);
                this.toggle();

            })
            .catch(err => {
                console.log(err)
            })
    }
    handelDelete() {
        DeleteAuthor(this.props.id)
            .then(res => {
                console.log(res);
                this.setState({ smShow: true })
                // window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        // let smClose = () => this.setState({ smShow: false });
        return (
            <>
                <Col className="m-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image} style={{ height: '20rem' }} />
                        <Card.Body>
                            <Card.Title><Link to={`/AuthorDetailes/${this.props.id}`}>{this.props.name}</Link>
                                <Card.Text className="float-right">
                                    <FontAwesomeIcon className="mr-3" icon="edit" onClick={this.toggle} />
                                    <FontAwesomeIcon icon="trash-alt" onClick={this.handelDelete} />
                                </Card.Text>
                            </Card.Title>

                        </Card.Body>
                    </Card>
                </Col>

                <Modal show={this.state.show} onHide={this.toggle}>
                    <Modal.Header>
                        <Modal.Title>Edit Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group >
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" value={this.state.authorName} onChange={this.setName} type="text" placeholder={this.props.name} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Number of books</Form.Label>
                                <Form.Control type="number" value={this.state.numberOfBooks} onChange={this.setNumOfBooks} placeholder={this.props.authorDetails.NumberOfBooks} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Number Of Friends</Form.Label>
                                <Form.Control type="number" value={this.state.numberOfFriends} onChange={this.setNumOfFriends} placeholder={this.props.authorDetails.NumberOfFriends} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Place of birth</Form.Label>
                                <Form.Control type="text" value={this.state.PlaceOfBirth} onChange={this.setPlaceOfBirth} placeholder={this.props.authorDetails.Born} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="text" value={this.state.Website} onChange={this.setWebsite} placeholder={this.props.authorDetails.Website} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Influences</Form.Label>
                                <Form.Control type="text" value={this.state.Influences} onChange={this.setInfl} placeholder={this.props.authorDetails.Influences} />
                            </Form.Group>
                            {/* <Form.Group >
                                <Form.Label>Genre</Form.Label>
                                <Form.Control type="text" value={this.state.authorName} onChange={this.setName}  placeholder={this.props.authorDetails.Genre} />
                            </Form.Group> */}
                            <Form.Group >
                                <Form.Label>Member Since</Form.Label>
                                <Form.Control type="text" value={this.state.MemberSince} onChange={this.setMemberS} placeholder={this.props.authorDetails.MemberSince} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.Description} onChange={this.setDesc} placeholder={this.props.Description} />
                            </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggle}>
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
                    onHide={this.state.smShow}
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
                    <Button type="submit" variant="primary" onClick={this.handelDeletePop}>
                        Ok
                       </Button>
                </Modal>
            </>

        );
    }


}

export default EditCard; 