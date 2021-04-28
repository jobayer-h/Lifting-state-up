import React, { useState } from 'react';
import Boil from './Boil';
import TempInput from './TempInput';

const Calculate = () => {
    const [temparature, setTemparature] = useState({
        temp: '',
        scail: ''
    });
    console.log(temparature);
    const {temp,scail} = temparature;

    const cToF = (temp) => {
        const forenhight = (temp * 9) / 5 + 32;
        return forenhight
    }
    const fToC = (temp) => {
        const celcius = ((temp - 32) * 5) / 9;
        return celcius
    }

    const convert = (temparature , convert) => {    
        const input = parseFloat(temparature)
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input)
        const rounded = Math.round(output * 1000)/1000;
        return rounded.toString();
    }

    const hadleChange = (e, scail) => {
        console.log(e.target.value);
        setTemparature({
            temp: e.target.value,
            scail
        });

    }
    

    const celcius = scail === 'f'? convert(temp , fToC): temparature.temp;
    const foren = scail === 'c'? convert(temp , cToF): temparature.temp;
    return (
        <div>
            <TempInput value={celcius}
                event={hadleChange}
                type="c" />

            <TempInput value={foren}
                event={hadleChange}
                type="f" />

            <Boil temp={parseFloat(celcius)} />
        </div>
    );
};

export default Calculate;