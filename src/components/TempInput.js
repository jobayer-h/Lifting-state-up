import React from 'react';

const TempInput = ({type ,event ,value}) => {
    const scail = {
        c: 'celcius',
        f: 'forenhight'
    }
    return (
        <fieldset>
            <legend>Temp in {scail[type]}:</legend>
            <input type="text" 
            value={value} 
            onChange={(e)=>event(e, type)}/>

        </fieldset>
    );
};

export default TempInput;