import React from 'react';
import {Link} from 'react-router-dom'
function Welcome() {
    return (
        <>
            <h1>Welcome to Robo Cleaner Program</h1>
            <p>
                the Steps here
            </p>
            <hr/>
            <Link to="/step-one" className="btn btn-blue">Start</Link>
        </>
    );
}

export default Welcome;
