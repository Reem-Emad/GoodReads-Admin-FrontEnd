import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

///font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
/////components
import HomePage from './components/SignIn/Home_Page';
import AuthorDetails from './components/Authors/Details';
import BookDetailes from './components/Books/BookDetails';
import AdminBooksList from './components/Books/Admin-List';
import AdminAuthorsList from './components/Authors/Admin-List';
import AdminCategoriesList from './components/Categories/Admin-List';
import AddnewBook from './components/Books/Add-Book';
import Users from './Users';


library.add(faEdit);
library.add(faTrashAlt);
library.add(faPlus);

export const MyContext = React.createContext({ users: Users });
class App extends React.PureComponent {
    state = {

        loggedInAdmin: {}
    }
    addLoggedInAdmin = (loggedInAdmin) => {
        this.setState({ loggedInAdmin: loggedInAdmin }, () => { console.log(this.state.loggedInAdmin) });
    }
    render() {
        const value = {
            state: this.state,
            addLoggedInAdmin: this.addLoggedInAdmin,
        }


        if (Object.keys(this.state.loggedInAdmin).length === 0)
            return (
                <MyContext.Provider value={value}>
                    <Router>

                        <Route exact to="/" component={HomePage}></Route>

                    </Router>
                </MyContext.Provider>
            )


        return (
            <>

                <MyContext.Provider value={value}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/admin/books" component={AdminBooksList} />
                            <Route exact path="/admin/add/book" component={AddnewBook} />
                            <Route exact path="/admin/authors" component={AdminAuthorsList} />
                            <Route exact path="/admin/categories" component={AdminCategoriesList} />
                            <Route exact path="/bookDetailes/:id" component={BookDetailes} />
                            <Route exact path="/AuthorDetailes/:id" component={AuthorDetails} />
                        </Switch>

                    </Router>
                </MyContext.Provider>
            </>
        )
    }
}
export default App;




