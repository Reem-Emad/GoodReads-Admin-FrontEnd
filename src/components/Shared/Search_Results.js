import React from 'react';
import { withRouter } from 'react-router-dom';


class SearchResults extends React.Component {

    handleClick = (bookId) => (e) => {
        this.props.history.push(`/bookDetailes/${bookId}`)
    }

    render() {
        const { results } = this.props;

        return (
            <>

                <div className="search-results" style={{ display: `${this.props.show}` }}>
                    <ul className="search-results-list">
                        {
                            results.map(res => <li className="search-results-ListItems" style={{ cursor: 'pointer' }} key={res.id} onClick={this.handleClick(res.id)}>{res.title}</li>)
                        }
                    </ul>
                </div>

            </>
        )
    }
}

export default withRouter(SearchResults);