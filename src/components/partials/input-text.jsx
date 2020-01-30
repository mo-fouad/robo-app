import React, {useState} from "react";

function InputText(props) {
    const {Type, Label, Class, AcceptOnly, Starter, ErrMessage} = props;

    const [inputValStart, setInputVal] = useState(Starter);
    const [inputErrHandel, setErrorHandel] = useState(false);


    const CheckAcceptance = (val) => {
        // check if this input as Acceptance Test
        if (AcceptOnly === "Numbers") {
            const re = /^[0-9\b]+$/;
            if (val === '' || re.test(val)) {
                setErrorHandel(false);
                setInputVal(val);
            } else {
                setErrorHandel(true)
            }
        } else if (AcceptOnly === "Letters") {

        }

    };
    return (
        <>
            <label>{Label}</label>
            <input
                type={Type}
                className={Class}
                onChange={(e) => CheckAcceptance(e.target.value)}
                value={inputValStart}
            />
            {inputErrHandel &&
            <p className="input-error">
                {ErrMessage}
            </p>
            }
        </>
    )
}

export default InputText;