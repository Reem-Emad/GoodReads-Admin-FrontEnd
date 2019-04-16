import React from 'react';
import { MyContext } from '../../App';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import Default from '../../images/noPicture.jpg';
import './Style.css';

class NavBar extends React.PureComponent {
    handleLogOut = (e) => {
        this.props.history.push('/');

    }
    handleClick = (loginedUser) => (e) => {
        let userState;
        if (loginedUser.Admin === true)
            userState = 'admin';
        else
            userState = 'user';

        this.props.history.push(`/${userState}/${e.target.name}`);

    }
    render() {
        return (
            <MyContext.Consumer>

                {value =>
                    (

                        <>
                            <Navbar expand="lg" className='navbarStyle'>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" className='navbarLinks'>
                                        <Nav.Link name='categories' onClick={this.handleClick(value.state.loginedUser)}>Categories</Nav.Link>
                                        <Nav.Link name='books' onClick={this.handleClick(value.state.loginedUser)}>Books</Nav.Link>
                                        <Nav.Link name='authors' onClick={this.handleClick(value.state.loginedUser)}>Authors</Nav.Link>
                                    </Nav>
                                    <Form inline style={{ marginLeft: '10rem' }}>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success" className='navbarSearchBtn'>Search</Button>
                                    </Form>
                                    {
                                        value.state.loginedUser.image === 'N/A' || value.state.loginedUser.image === '' ?
                                            <Image src={Default} roundedCircle style={{ marginLeft: '200px', width: '65px', height: '60px' }} />
                                            :
                                            <Image src={value.state.loginedUser.image} roundedCircle style={{ marginLeft: '200px', width: '65px', height: '60px' }} />
                                    }
                                    <div style={{ color: '#382110', marginLeft: '7px', fontWeight: 'bold' }}>{value.state.loginedUser.FName} {value.state.loginedUser.LName}</div>
                                    <Button variant="primary" size="sm" className='navbarSearchBtn' style={{ marginLeft: '100px' }} onClick={this.handleLogOut} >
                                        log out
                        </Button>

                                </Navbar.Collapse>
                            </Navbar>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }

}
export default withRouter(NavBar);