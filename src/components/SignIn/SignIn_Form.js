import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { MyContext } from '../../App';
import Logo from '../../images/logo.png';
import './Style.css';
import { Z_BLOCK } from 'zlib';

class SignIn extends React.PureComponent {

    state = {
        enteredMail: '',
        enteredPassword: '',
        enteredDataValidation: ''
    }
    handleSubmit = (existingUsers, addLoginedUser) => (event) => {
        event.preventDefault();

        const user = existingUsers.find(element => {
            if (element.email === this.state.enteredMail)
                return element;
        })
        if (user === undefined)
            this.setState({ enteredDataValidation: 'account not exist' })
        else {
            if (user.password === this.state.enteredPassword && user.Admin === false) {
                this.setState({ enteredDataValidation: 'vaild user' })
                addLoginedUser(user);
                // this.props.history.push('/user/home');
            }
            else if (user.password === this.state.enteredPassword && user.Admin === true) {
                this.setState({ enteredDataValidation: 'vaild admin' })
                addLoginedUser(user);
                this.props.history.push('/admin/categories');
            }
            else
                this.setState({ enteredDataValidation: 'incorrect password' })
        }


    }
    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({ [key]: value })
    }


    render() {
        return (
            <MyContext.Consumer>

                {value =>
                    (
                        <>
                            <Navbar expand="lg" className="HomePage_Navbar">
                                <Navbar.Brand style={{ marginLeft: '50px',marginTop: '-519px'}}><Image src={Logo} /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Form  style={{marginRight: '530px',marginTop: '-85px'}} className="SignIn_Form" onSubmit={this.handleSubmit(value.state.users, value.addLoginedUser)}>
                                        <Form.Group className="mr-2"  >
                                            <Form.Control type="email" name='enteredMail' placeholder="Enter email" onChange={this.handleChange} value={this.state.enteredMail} />
                                        </Form.Group>
                                        <Form.Group className="mr-2" >
                                            <Form.Control type="password" name='enteredPassword' placeholder="Password" onChange={this.handleChange} value={this.state.enteredPassword} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mr-2 SignIn_form-btn">
                                            Sign in
                                          </Button>
                                        <Form.Text style={{ color: "red" }}>{this.state.enteredDataValidation}</Form.Text>
                                    </Form>

                                </Navbar.Collapse>
                            </Navbar>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }
}

export default withRouter(SignIn);