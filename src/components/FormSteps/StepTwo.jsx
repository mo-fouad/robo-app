import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form'

function StepTwo(props) {
    const {NumOfCommands} = props;

    let commandsDirections = [];

    for (let i = 0; i < NumOfCommands; i++) {
        commandsDirections.push({direction: "", distance: ""})
    }


    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row step-form-row">
                <label htmlFor="">Please inter the commands that you need to the robot to go</label>
                {
                    commandsDirections.map((ele, index) =>
                        <div  key={index}>
                            <input name={ele.index}
                                   className="input input-half"
                                   ref={register({
                                       required: true,
                                       maxLength: 20, pattern: {
                                           value: /^[E|W|N|S]+$/,
                                           message: "invalid Direction command"
                                       }
                                   })}
                                   placeholder="Direction"
                            />

                            <input name="startInX"
                                   className="input input-half"
                                   ref={register({
                                       required: true,
                                       maxLength: 20, pattern: {
                                           value: /^[\d ()+-]+$/,
                                           message: "invalid Start Point"
                                       }
                                   })}
                                   placeholder="Amount of Steps"
                            />
                        </div>
                    )
                }


            </div>
            <input type="submit"/>
        </form>
    );
}

export default StepTwo;
