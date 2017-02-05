import React from 'react';

const Thumb = ({index, children, onClick}) => (
    <div>
        <img onClick={onClick} src={children} alt=""/>
    </div>
);

export default Thumb;
