import React from 'react';
import axios from 'axios'
import MainImage from './MainImage';
import Thumbs from './Thumbs';

const flickrImages = [
  "https://c2.staticflickr.com/6/5543/9709951228_1d1c5f4728_b.jpg",
  "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg",
  "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg",
  "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
  "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
];

class Gallery extends React.Component {
    state = {
        selectedImage: flickrImages[0],
        images: flickrImages
    }

    changeSelectedImage = (index) => {
        this.setState({
            selectedImage: this.state.images[index || 0]
        })
    }

    componentWillMount() {
        const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5'
        const url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`

        axios(url)
        .then(res => res.data)
        .then(data => data.photos.photo)
        .then(photos => {
            console.log(photos)
            const images = photos.map(({farm, server, id, secret}) =>
                `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`)

            this.setState({
                images,
                selectedImage: images[0]
            })
        })


    }

    render() {
        const { selectedImage, images } = this.state;

        return (
          <main className="gallery">
            <MainImage selectedImage={selectedImage} />
            <Thumbs images={images} changeSelectedImage={this.changeSelectedImage} />
          </main>
        );
    }
}

export default Gallery;
