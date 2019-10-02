import React from 'react';

class ImageContainer extends React.Component {
   
   // getImages = () => {
   //     return fetch(`https://images-api.nasa.gov/search?q=${this.props.currentPlanet}`)
   //     .then(resp => resp.json())
   // }

   // state = {
   //     images: []
   // }
    
   // componentDidUpdate(prevprops) {
   //    if(prevprops) {
   //        this.getImages()
   //     .then(images => this.setState({images: images.collection.items}))
   //    }
   // }

render() {
  return (
        <div className="ImageContainer" >
          
                <img className={'ImageGallery'} src={this.props.answer.image1}></img>
                <img className={'ImageGallery'} src={this.props.answer.image2}></img>
                <img className={'ImageGallery'} src={this.props.answer.image3}></img>
                <img className={'ImageGallery'} src={this.props.answer.image4}></img>
    
        </div>
        );
    }
}

export default ImageContainer;