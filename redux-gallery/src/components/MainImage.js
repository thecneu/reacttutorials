import React from 'react';

const MainImage = ({selectedImage}) => (
    <div className="gallery-image">
        <div>
            <img src={selectedImage} alt="" />
        </div>
    </div>
);

export default MainImage;
