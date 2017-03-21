import React from 'react';

const Thumb = ({index, children, changeSelectedImage}) => (
    <div>
        <img onClick={changeSelectedImage} src={children} alt=""/>
    </div>
);

export default Thumb;
