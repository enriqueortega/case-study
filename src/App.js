import React, { Component } from 'react';
import NewCarousel from './Carousel.js';
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
    this.setState({
      images: this.data.Images[0].PrimaryImage //TODO: Needs to be dynamic. Perhaps have it cleaned up in the api.js file
    })
  }
  
  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <NewCarousel
          images={images}> 

          </NewCarousel>
        </header>
      </div>
    );
  }
}

function getData(){
    return api.getPageData(true)
}
export default App;
