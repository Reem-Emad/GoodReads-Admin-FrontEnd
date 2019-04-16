import React from 'react';
import EditCard from './Edit-Card';
import CategirosData from '../../Categories';
import Navbar from '../Shared/Navbar';
import { Row } from 'react-bootstrap';
import AddCategory from './Add-Category'

class CategoriesAdminList extends React.Component {

     state = {
          Categiros: CategirosData
     }

     DeleteHandelAdmin = (id) => {
          const res = this.state.Categiros.filter(data =>
               data.Id !== id
          )
          this.setState({ Categiros: res })
     }

     render() {
          return (
               <>
                    <Navbar></Navbar>
                    <AddCategory />
                    <Row className="no-gutters">
                         {this.state.Categiros.map(b =>
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