import React from 'react';
import Gallery from 'react-grid-gallery';


class ImageContainer extends React.Component {
   
    getImages = () => {
        return fetch(`https://images-api.nasa.gov/search?q=${this.props.currentPlanet}`)
        .then(resp => resp.json())
    }

    state = {
        images: []
    }
    
    componentDidUpdate(prevprops) {
       if(prevprops) {
           this.getImages()
        .then(images => this.setState({images: images.collection.items}))
       }
    }

render() {
  return (
        <div className="ImageContainer" >
            {this.state.images.map(object => <img className={'ImageGallery'} src={object.links[0].href}></img>)}
        </div>
        );
    }
}

export default ImageContainer;