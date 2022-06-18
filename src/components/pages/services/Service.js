import React from 'react';
import Herosect from '../../heropage/Herosect';
import Pricing from '../../pricing/Pricing';
import { homeObjOne } from './Data';

function Service() {
    return (
        <>
            <Pricing />
            <Herosect {...homeObjOne} />
        </>
    );
}

export default Service;
