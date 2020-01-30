import React from 'react';
import {Link} from "react-router-dom";

function StepOne() {
    return (
        <>
            <div className="row step-form-row">
                <label htmlFor="">Please insert the Numbers of Commands</label>
                <input className="input" type="text" placeholder="please insert the "/>
            </div>
            <div className="row step-form-row">
                <label htmlFor="">Please inter the Starting Point</label>
                <input className="input input-half" type="text" placeholder="X"/>
                <input className="input input-half" type="text" placeholder="Y"/>
            </div>
            <Link to="/step-two" className="btn btn-blue">Next</Link>
        </>
    );
}

export default StepOne;
