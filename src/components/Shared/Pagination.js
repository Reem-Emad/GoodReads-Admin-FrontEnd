import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Style.css';

class PaginationComponent extends React.PureComponent {
    render() {
        return (
            <>
                <Pagination className='pages'>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item >{1}</Pagination.Item>

                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </>
        )
    }

}

export default PaginationComponent;