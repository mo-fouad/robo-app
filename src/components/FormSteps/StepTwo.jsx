import React, {useRef, useState} from 'react';

function StepTwo(props) {

    let commandsDirections = {x: '', y: ''};

    const inputX = useRef(null);
    const inputY = useRef(null);

    const [StarX, setStarX] = useState("");
    const [StarY, setStarY] = useState("");

    const regTest = /^[0-9]*$/; // test for your Inputs

    const handelXChange = (val) => {
        setStarX(val);
    };


    const handelYChange = (val) => {
        setStarY(val);
    };
    const handelSubmit = data => {
    };
    console.log(StarX);
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
                />

                <input type="text"
                       required
                       ref={inputY}
                       min="-100000"
                       max="100000"
                       step="1"
                       className="input input-half"
                       onChange={(e) => handelYChange(e.target.value)}
                       value={StarY}
                />

                <p className="input-note">
                    PS: Only Numbers are allowed here, <br/>
                    No Decimals, And not Greater than 100000 or less than -100000 :)
                </p>
            </div>
            <input type="submit"/>
        </form>
    );
}

export default StepTwo;
