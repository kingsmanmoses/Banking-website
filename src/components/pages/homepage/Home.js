import React from 'react';
import Herosect from '../../heropage/Herosect';
import Pricing from '../../pricing/Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

function Home() {
    return (
        <>
            <Herosect {...homeObjOne} />
            <Herosect {...homeObjThree} />
            <Herosect {...homeObjTwo} />
            <Pricing />
            <Herosect {...homeObjFour} />
        </>
    );
}

export default Home;
