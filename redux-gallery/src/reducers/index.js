import axios from 'axios';

const images = [
  "https://c2.staticflickr.com/6/5543/9709951228_1d1c5f4728_b.jpg",
  "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg",
  "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg",
  "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
  "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
]
const initialState = {
    images,
    selectedImage: images[0]
}

export default (state = initialState, action) => {
    console.log(state, action)
    switch(action.type) {
        case 'NEW_IMAGES':
            return {
                images: action.payload,
                selectedImage: action.payload[0]
            }
        case 'SELECT_IMAGE':
            return {
                ...state,
                selectedImage: action.payload
            }
        default: return state
    }
}

export const selectImage = (image) => ({
  type: 'SELECT_IMAGE',
  payload: image
})

export const getImages = () => (dispatch) => {
  const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5'
  const url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`

  axios(url)
  .then(res => res.data)
  .then(data => data.photos.photo)
  .then(photos => {
      const images = photos.map(({farm, server, id, secret}) =>
          `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`)

      dispatch({
          type: 'NEW_IMAGES',
          payload: images
      })
  })
}
