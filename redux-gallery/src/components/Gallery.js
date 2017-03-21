import React from 'react';
import { connect } from 'react-redux';
import MainImage from './MainImage';
import Thumbs from './Thumbs';
import { selectImage } from '../reducers';

class Gallery extends React.Component {
    render() {
        const { selectedImage, images, selectImage } = this.props;

        return (
          <main className="gallery">
            <MainImage selectedImage={selectedImage} />
            <Thumbs images={images} changeSelectedImage={selectImage} />
          </main>
        );
    }
}

export default connect((state) => ({
    images: state.images,
    selectedImage: state.selectedImage
}), {
    selectImage
})(Gallery);
