import React, {useState} from 'react';

function Result(props) {
    const {arrOfCommands, numOfCommands, stPoint} = props;

    let tempArrOfCommand = [
        {direction: "E", magnitude: "2"},
        {direction: "N", magnitude: "1"},
        // {direction: "S", magnitude: "4"},
        // {direction: "E", magnitude: "1"},

    ]

    const [currentPoint, setCurrentPoint] = useState(stPoint);

    let boundaries = {
        x: '100000',
        y: '100000',
        mx: '-100000',
        my: '-100000'
    };

    let cleanedRooms = {};
    cleanedRooms[[stPoint.x, stPoint.y]] = true;     // starter room :D

    let tempCurrPoint = currentPoint;
    // todo : magic
    //  - check our commands in the array
    //  - loop steps for every command,
    //  - record rooms that has been cleaned
    //  - for every room >> check if we cleaned this room before or not
    //  - if N > go in Y , if E go in X , if S go in -Y, if W go in -X

    // Go North
    const goNorth = (Mag) => {
        // move our current Point in Y , and Add cleaned rooms in our Set,
        for (let i = 1; i <= +Mag; i++) {
            tempCurrPoint.y = parseInt(tempCurrPoint.y) + 1;
            cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] = cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] || true;
        }
    };

    // Go South
    const goSouth = (Mag) => {
        // move our current Point in Y , and Add cleaned rooms in our Set,
        for (let i = 1; i <= +Mag; i++) {
            tempCurrPoint.y = parseInt(tempCurrPoint.y) - 1;
            cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] = cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] || true;
        }
    };

    // go East
    const goEast = (Mag) => {
        for (let i = 1; i <= +Mag; i++) {
            tempCurrPoint.x = parseInt(tempCurrPoint.x) + 1;
            cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] = cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] || true;
        }
    }

    // go West
    const goWest = (Mag) => {
        for (let i = 1; i <= +Mag; i++) {
            tempCurrPoint.x = parseInt(tempCurrPoint.x) - 1;
            cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] = cleanedRooms[[tempCurrPoint.x, tempCurrPoint.y]] || true;
        }
    };


    arrOfCommands.forEach(com => {
        switch (com.direction) {
            case "N":
                // increase in Y
                goNorth(parseInt(com.magnitude));
                break;
            case "E":
                // increase in X
                goEast(parseInt(com.magnitude));
                break;
            case "S":
                // decrease in Y
                goSouth(parseInt(com.magnitude));
                break;
            case "W":
                //  decrease in X
                goWest(parseInt(com.magnitude));
                break;
            default:
                console.log("done");
                break
        }
    });

    return (
        <>
            <div className="row step-form-row">
                Great our work is done, <br/>
                we have cleaned <b>{Object.keys(cleanedRooms).length}</b> rooms
            </div>
        </>
    );
}

export default Result;
