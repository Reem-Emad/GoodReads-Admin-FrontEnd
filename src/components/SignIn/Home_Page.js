import React from 'react';
import SignIn from './SignIn_Form';

import './Style.css';

const HomePage = props => {
    return (
        <>
            <div className="HomePage">
                <SignIn />
            </div>
        </>
    )
}
export default HomePage;