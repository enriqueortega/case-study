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
      images: this.data.Images[0].PrimaryImage
    })
    console.log("this.data = ", this.data);
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NewCarousel
          images={this.state.images[0]}> 

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
