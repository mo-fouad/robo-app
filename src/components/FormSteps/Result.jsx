import React from 'react';
import {Link} from "react-router-dom";

function Result() {
    return (
        <>
            <div className="row step-form-row">
                Great our work is done,
                we have cleaned like 10 rooms :D
            </div>
            <Link to="/step-one" className="btn btn-blue">Want to start again ?!</Link>
        </>
    );
}

export default Result;
