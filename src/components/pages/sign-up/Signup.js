import React from 'react';
import Herosect from '../../heropage/Herosect';
import { homeObjThree } from '../homepage/Data';

function Signup() {
    return (
        <>
            <Herosect {...homeObjThree} />
        </>
    );
}

export default Signup;
