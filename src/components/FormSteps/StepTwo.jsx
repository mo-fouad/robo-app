import React, {useRef, useState} from 'react';
import {withRouter} from 'react-router-dom'

function StepTwo(props) {

    const {getData} = props;
    const inputX = useRef(null);
    const inputY = useRef(null);

    const [StarX, setStarX] = useState("");
    const [StarY, setStarY] = useState("");

    const handelXChange = (val) => {
        setStarX(val);
    };

    const handelYChange = (val) => {
        setStarY(val);
    };

    const handelSubmit = event => {
        event.preventDefault();
        getData({StarX, StarY});
        props.history.push('/step-three');
    };

    return (
        <form onSubmit={handelSubmit}>
            <div className="row step-form-row">
                <label htmlFor="">
                    Please inter the Start Pints for your Robot
                </label>

                <input type="number"
                       required
                       ref={inputX}
                       min="-100000"
                       max="100000"
                       step="1"
                       className="input input-half"
                       onChange={event => handelXChange(event.target.value)}
                       value={StarX}
                       title="please enter a number between -100000 & 100000"
                />

                <input type="number"
                       required
                       ref={inputY}
                       min="-100000"
                       max="100000"
                       step="1"
                       className="input input-half"
                       onChange={(e) => handelYChange(e.target.value)}
                       value={StarY}
                       title="please enter a number between -100000 & 100000"
                />

                <p className="input-note">
                    PS: Only Numbers are allowed here, <br/>
                    No Decimals, And not Greater than 100000 or less than -100000 :)
                </p>
            </div>
            <input type="submit" className="btn"/>
        </form>
    );
}

export default withRouter(StepTwo);
