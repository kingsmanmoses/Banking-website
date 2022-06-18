import React from 'react';
import Herosect from '../../heropage/Herosect';
import {  homeObjTwo } from './Data';

function Products() {
    return (
        <>
            <Herosect {...homeObjTwo} />
        </>
    );
}

export default Products;
