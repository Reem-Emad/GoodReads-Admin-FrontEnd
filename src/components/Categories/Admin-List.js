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
              .then(res => {
                  this.setState({ Categories: res });
              })
              .catch(err => {
                  console.log(err)
              })
  
      }
     DeleteHandelAdmin = (id) => {
          const res = this.state.Categories.filter(data =>
               data.Id !== id
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
                              <EditCard key={b.Id}
                                   id={b.Id}
                                   name={b.Name}
                                   delfun={this.DeleteHandelAdmin}
                              />
                         )}
                    </Row>
               </>
          )
     }
}

export default CategoriesAdminList;