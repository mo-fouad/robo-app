import React, {useState, useRef} from 'react';
import {withRouter} from 'react-router-dom'

function StepOne(props) {

    const {getData} = props;

    const [numOfCommands, setNumOfCommands] = useState(0);
    const inputEl = useRef(null);

    // Handel Number of Commands Change
    const handelCommandsChange = (val) => {
        setNumOfCommands(val)
    };

    // Handel Input foucs
    const handelFoucsChange = () => {
        inputEl.current.className = "input"
        setNumOfCommands("")
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        getData(numOfCommands);
        props.history.push('/step-two');

    };

    return (
        <form onSubmit={handelSubmit}>
            <div className="row step-form-row">
                <label>please inter number of Commands Here</label>
                <input type="number"
                       required
                       min="1"
                       max="10000"
                       ref={inputEl}
                       className="input"
                       onFocus={(e) => handelFoucsChange(e.target)}
                       onChange={(e) => handelCommandsChange(e.target.value)}
                       value={numOfCommands}
                />
                <p className="input-note">PS, Only <b> Positive Numbers </b> are allowed here <br/>
                    and must be greater than 0
                </p>
            </div>
            <button>Next</button>
        </form>
    );
}

export default withRouter(StepOne);
