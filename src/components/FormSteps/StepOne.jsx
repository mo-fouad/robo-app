import React from 'react';
import {useForm} from 'react-hook-form'

function StepOne() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row step-form-row">
                <label>please inter number of Commands Here</label>
                <input name="NumbersOfCommands"
                       className="input"
                       ref={register({
                           required: true,
                           maxLength: 20, pattern: {
                               value: /^[1-9\b]+$/,
                               message: "invalid commands number"
                           }
                       })}
                       placeholder="number of commads"
                />
                {errors.NumbersOfCommands &&
                <p className="input-error">
                    {errors.NumbersOfCommands.message}
                </p>
                }
            </div>
            <div className="row step-form-row">
                <label htmlFor="">Please inter the Starting Point</label>
                <input name="startInX"
                       className="input input-half"
                       ref={register({
                           required: true,
                           maxLength: 20, pattern: {
                               value: /^[\d ()+-]+$/,
                               message: "invalid Start Point"
                           }
                       })}
                       placeholder="Start Point X"
                />

                {errors.startInX &&
                <p className="input-error">{errors.startInX.message}</p>}

                <input name="startInY"
                       className="input input-half"
                       ref={register({
                           required: true,
                           maxLength: 20, pattern: {
                               value: /^[\d ()+-]+$/,
                               message: "invalid Start Point"
                           }
                       })}
                       placeholder="Start Point Y"
                />

                {errors.startInY &&
                <p className="input-error">{errors.startInY.message}</p>}

            </div>
            <input type="submit"/>
        </form>
    );
}

export default StepOne;
