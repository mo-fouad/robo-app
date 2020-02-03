import React, {useState, useRef} from 'react';
import {withRouter} from 'react-router-dom'

function StepOne(props) {

    const {getData} = props;

    const [numOfCommands, setNumOfCommands] = useState(0);
    const inputEl = useRef(null);

    // Handel Number of Commands Change
    const handelCommandsChange = (val) => {
        const re = /^[0-9\b]+$/;
        if (val === '' || re.test(val)) {
            setNumOfCommands(val)
        }
    };

    // Handel Input foucs
    const handelFoucsChange = () => {
        inputEl.current.className = "input"
        setNumOfCommands("")
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        if (numOfCommands === "" || numOfCommands < 1) {
            inputEl.current.className = "input input-red"
        } else {
            getData(numOfCommands);
            props.history.push('/step-two');
        }
    };

    return (
        <form onSubmit={handelSubmit}>
            <div className="row step-form-row">
                <label>please inter number of Commands Here</label>
                <input type="text"
                       ref={inputEl}
                       className="input"
                       onFocus={(e) => handelFoucsChange(e.target)}
                       onChange={(e) => handelCommandsChange(e.target.value)}
                       value={numOfCommands}
                />
                <p className="input-note">PS, Only <b> Positive Numbers </b> are allowed here</p>
            </div>
            <button>Next</button>
        </form>
    );
}

export default withRouter(StepOne);
