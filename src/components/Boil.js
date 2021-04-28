import React from 'react';

const Boil = ({temp}) => {
    
    if (temp >= 100) {
        return(
            <p>Egg will Boil</p>
        );
    } else {
        return(
            <p>Egg will not Boil</p>
        );
    }
};

export default Boil;