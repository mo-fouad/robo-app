import React, {useState} from 'react';

import {withRouter} from 'react-router-dom'

function StepThree(props) {
    const {numOfCommands,getData} = props;
    const regDirection = /^[W|S|E|N]*$/g

    let startArr = [];
    for (let i = 0; i < numOfCommands; i++) {
        startArr.push({direction: "", magnitude: ""})
    }

    const [elemArr, setElemArr] = useState(startArr);


    const handelSubmit = (e) => {
        e.preventDefault();
        getData(elemArr);
        props.history.push('/result');
    };

    const handelDirectionChange = (e) => {
        // accept only one character then move the mouse to the next input
        if (e.target.value.length >= 2) {
            e.target.nextSibling.focus();
        } else {
            let eleName = e.target.name;
            // todo fix fot delete char after adding it
            if (regDirection.test(e.target.value)) {
                let tempStateArr = [...elemArr];
                tempStateArr[eleName].direction = e.target.value;
                setElemArr(tempStateArr);
            }
        }
    };

    const handelMagnitudeChange = (e) => {
        let eleName = e.target.name;
        let tempstateArr = [...elemArr];
        tempstateArr[eleName].magnitude = e.target.value;
        setElemArr(tempstateArr);

    };

    // todo : Accept only values that inside the borders, by considering the start points and directions

    return (
        <form onSubmit={handelSubmit}>
            <div className="input-note">
                ps: you can only inter <b>E,W,N </b>or <b> S </b> in the dDirection Filed, <br/>
                and you can onlye inter numbers in
            </div>

            <input type="text" disabled className="input input-half" placeholder="Direction"/>
            <input type="text" disabled className="input input-half" placeholder="Magnitude"/>

            {elemArr.map((ele, key) =>
                <div className="row step-form-row" key={key}>
                    <input type="text"
                           required
                           name={key}
                           className="input input-half"
                           onChange={e => handelDirectionChange(e)}
                           value={ele.direction}
                    />
                    <input type="number"
                           required
                           name={key}
                           min="-100000"
                           max="100000"
                           step="1"
                           className="input input-half"
                           onChange={e => handelMagnitudeChange(e)}
                           value={ele.magnitude}
                    />
                </div>
            )}

            <button type="submit" className="btn btn-blue">Do Magic</button>
        </form>
    );
}

export default withRouter(StepThree);