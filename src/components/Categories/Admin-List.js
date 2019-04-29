import React from 'react';
import EditCard from './Edit-Card';
import CategirosData from '../../Categories';
import Navbar from '../Shared/Navbar';
import { Row } from 'react-bootstrap';
import AddCategory from './Add-Category';
import {getCategories} from '../../API/category';


class CategoriesAdminList extends React.Component {

     state = {
          Categories: []
     }
     componentDidMount() {
          getCategories()
              .then(categories => {
                  this.setState({ Categories: categories });
              })
              .catch(err => {
                  console.log(err)
              })
  
      }
     DeleteHandelAdmin = (id) => {
          const res = this.state.Categories.filter(data =>
               data.id !== id
          )
          this.setState({ Categories: res })
     }

     render() {
          return (
               <>
                    <Navbar></Navbar>
                    <AddCategory />
                    <Row className="no-gutters">
                         {this.state.Categories.map(b =>
                              <EditCard key={b.id}
                                   id={b.id}
                                   name={b.name}
                                   delfun={this.DeleteHandelAdmin}
                              />
                         )}
                    </Row>
               </>
          )
     }
}

export default CategoriesAdminList;