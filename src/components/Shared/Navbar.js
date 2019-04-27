import React from 'react';
import { MyContext } from '../../App';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import SearchResults from '../Shared/Search_Results';
import { searchForBooks } from '../../API/Book';
import Default from '../../images/noPicture.jpg';
import './Style.css';

class NavBar extends React.PureComponent {
    state = {
        search: "",
        showResults: "none",
        error: "",
        searchResults: []
    }
    showResults = () => {
        this.setState({ showResults: "block" });
    }

    hideResults = () => {
        this.setState({ showResults: "none" });
    }
    handleLogOut = (e) => {
        this.props.history.push('/');

    }
    handleClick = (e) => {

        this.props.history.push(`/admin/${e.target.name}`);

    }
    handleSearch = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value }, () => {
            searchForBooks(this.state.search)
                .then(res => {
                    this.setState({ searchResults: res })
                })
                .catch(err => {
                    this.setState({ error: "server error" });

                })
        })
        this.showResults();
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
                                        <Nav.Link name='categories' onClick={this.handleClick}>Categories</Nav.Link>
                                        <Nav.Link name='books' onClick={this.handleClick}>Books</Nav.Link>
                                        <Nav.Link name='authors' onClick={this.handleClick}>Authors</Nav.Link>
                                    </Nav>
                                    <Form inline style={{ marginLeft: '10rem' }}>
                                        <FormControl type="text" autoComplete="off" placeholder="Search" className="mr-sm-2" name="search" value={this.state.search} onChange={this.handleSearch} />
                                        <i className="fas fa-times" onClick={this.hideResults}></i>
                                        <SearchResults show={this.state.showResults} results={this.state.searchResults} />

                                    </Form>


                                    <Image src={Default} roundedCircle style={{ marginLeft: '200px', width: '65px', height: '60px' }} />

                                    <div style={{ color: '#382110', marginLeft: '7px', fontWeight: 'bold' }}>{value.state.loggedInAdmin.name.fname} {value.state.loggedInAdmin.name.lname}</div>
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