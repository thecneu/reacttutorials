import React from 'react';
import Thumb from './Thumb';

const Thumbs = ({images, changeSelectedImage}) => (
    <div className="image-scroller">
        {images.map((image, i) =>
        <Thumb
            key={i}
            index={i}
            changeSelectedImage={() => changeSelectedImage(image)}
        >
            {image}
        </Thumb>)}
    </div>
);

export default Thumbs;
