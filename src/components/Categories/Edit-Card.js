import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditCategory from './Edit-Category'

class EditCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate: false,
        };
    }

    ShowUpdate = () => {
        this.setState({showUpdate: true})
    }

    hideUpdate = () => {
        this.setState({showUpdate: false})
    }

    render() {
        return (
            <>
                <Row className="no-gutters">
                    <EditCategory 
                        Id={this.props.id}
                        Name={this.props.name}
                        show={this.state.showUpdate}
                        hideUpdate={this.hideUpdate}
                        ShowUpdate={this.ShowUpdate}
                    />
                </Row>
                
                <Col className="m-3">
                    <Card style={{ width: '18rem' }} onClick={this.ShowUpdate}>
                        <Card.Body>
                            <Card.Title>{this.props.name}
                                <Card.Text className="float-right">
                                    <FontAwesomeIcon className="mr-3" icon="edit" onClick={this.ShowUpdate} />
                                    <FontAwesomeIcon icon="trash-alt" onClick={() => {this.props.delfun(this.props.id)} } />
                                </Card.Text>
                            </Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            </>

        );
    }


}

export default EditCard; 