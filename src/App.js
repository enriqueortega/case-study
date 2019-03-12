import React, { Component } from 'react';
import NewCarousel from './components/Carousel.js';
import TextBlock from './components/TextBlock.js';
import SpecialOffersBlock from './components/SpecialOffers.js'
import api from './App.api.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  async componentWillMount() {
    this.data = await getData();
    console.log(this.data);
    this.setState({
      images: this.data.Images[0].PrimaryImage, //TODO: Needs to be dynamic. Perhaps have it cleaned up in the api.js file
      title: this.data.title,
      price: this.data.Offers[0].OfferPrice[0].formattedPriceValue,
      online: this.data.Offers[0].OfferPrice[0].priceQualifier,
      promotions: this.data.Promotions
     })
  }
  
  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <div className="App">

        <TextBlock
            className="title"
            text={this.state.title}>
        </TextBlock>
        <NewCarousel
            images={images}> 
        </NewCarousel>
        

        <div className="pricing">
            <TextBlock
                className="price"
                text={this.state.price}>
            </TextBlock>
            <TextBlock
                className="online-price"
                text={this.state.online}>
            </TextBlock>
        </div>

        <SpecialOffersBlock
            className="SpecialOffersBlock"
            promotions={this.state.promotions}>

        </SpecialOffersBlock>
      </div>
    );
  }
}

function getData(){
    return api.getPageData(true)
}
export default App;
