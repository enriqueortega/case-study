import React, { Component } from 'react';
import NewCarousel from './components/Carousel.js';
import TextBlock from './components/TextBlock.js';
import SpecialOffersBlock from './components/SpecialOffers.js'
import api from './App.api.js';
import './App.css';
import Button from './components/Button.js';

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
      promotions: this.data.Promotions,
      purchasingChannelCode: this.data.purchasingChannelCode
     })
  }
  
  render() {
    const { images, title, price, online, promotions, purchasingChannelCode } = this.state;
    return (
      <div className="App">

        <TextBlock
            className="title"
            text={title}>
        </TextBlock>
        <NewCarousel
            images={images}> 
        </NewCarousel>
        

        <div className="pricing">
            <TextBlock
                className="price"
                text={price}>
            </TextBlock>
            <TextBlock
                className="online-price"
                text={online}>
            </TextBlock>
        </div>

        <SpecialOffersBlock
            className="SpecialOffersBlock"
            promotions={promotions}>
        </SpecialOffersBlock>

        {/* TODO: Quantity */}

        {/* TODO: Add to Cart */}
        
        <div className="buttons-section">
            <Button
                className="PickUpInStore"
                text="PICK UP IN STORE"
                isDisabled={purchasingChannelCode}>

            </Button>
            <Button
                className="AddToCart"
                text="ADD TO CART"
                isDisabled={purchasingChannelCode}>

            </Button>
        </div>

        {/* TODO: Returns section */}

        {/* TODO: Secondary buttons row */}

        {/* TODO: Product Highlights */}

        {/* TODO: Reviews section */}


      </div>
    );
  }
}

function getData(){
    return api.getPageData(true)
}
export default App;
