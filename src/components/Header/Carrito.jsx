import React from 'react';
import { BagFill } from 'react-bootstrap-icons';

const Carrito = (props) => {
    return (
        <div className='cart'>
            <BagFill color='black' size={20}></BagFill> {props.numerito}
        </div>
    );
};

export default Carrito;
