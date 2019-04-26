import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { MyContext } from '../../App';
import Logo from '../../images/logo.png';
import { login, getProfile } from '../../API/Admin';
import './Style.css';
import { Z_BLOCK } from 'zlib';

class SignIn extends React.PureComponent {

    state = {
        email: '',
        password: '',
        enteredDataValidation: ''
    }
    handleSubmit = (addLoggedInAdmin) => (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        if (email === '' && password === '')
            this.setState({ enteredDataValidation: 'Enter email and password please' })
        else if (password === '')
            this.setState({ enteredDataValidation: 'Enter password please' })
        else if (email === '')
            this.setState({ enteredDataValidation: 'Enter email please' })

        else {
            login({ email, password })
                .then(res => {

                    localStorage.setItem('adminToken', res.token);
                    getProfile()
                        .then(res => { addLoggedInAdmin(res) })
                        .catch(err => {
                            this.setState({ enteredDataValidation: 'please try again later' })
                        })
                    this.props.history.push('/admin/home');
                })
                .catch(err => {

                    this.setState({ enteredDataValidation: 'Incorrect mail or password' })
                })
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
                                <Navbar.Brand style={{ marginLeft: '50px' }}><Image src={Logo} /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Form inline className="SignIn_Form" onSubmit={this.handleSubmit(value.addLoggedInAdmin)}>
                                        <Form.Group className="mr-2" >
                                            <Form.Control type="email" name='email' placeholder="Enter email" onChange={this.handleChange} value={this.state.email} />
                                        </Form.Group>
                                        <Form.Group className="mr-2" >
                                            <Form.Control type="password" name='password' placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mr-2 SignIn_form-btn">
                                            Sign in
                                          </Button>
                                        <Form.Text style={{ color: 'darkred', fontWeight: 'bold' }}>{this.state.enteredDataValidation}</Form.Text>
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