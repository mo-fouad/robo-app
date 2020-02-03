import React, {useState} from 'react';

import {withRouter} from 'react-router-dom'

function StepThree(props) {

    const {numOfCommands} = props;
    const regDirection = /^[W|S|E|N]+$/

    let startArr = [];
    for (let i = 0; i < numOfCommands; i++) {
        startArr.push({direction: "", magnitude: ""})
    }

    const [elemArr, setElemArr] = useState(startArr)


    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(elemArr);
    };

    const handelDirectionChange = (e) => {
        let eleName = e.target.name;
        // todo fix fot delete char after adding it
        if (regDirection.test(e.target.value)) {
            let tempstateArr = [...elemArr];
            tempstateArr[eleName].direction = e.target.value;
            setElemArr(tempstateArr);
        }
    };

    const handelMagnitudeChange = (e) => {
        let eleName = e.target.name;
        let tempstateArr = [...elemArr];
        tempstateArr[eleName].magnitude = e.target.value;
        setElemArr(tempstateArr);

    };

    console.info(elemArr);
    return (
        <form onSubmit={handelSubmit}>
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