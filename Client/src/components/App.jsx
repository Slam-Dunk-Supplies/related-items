import React from 'react';
import example from '../example.js';
import Slide from './slide.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        products: example
    }
    
  }

 
  render() {
    return (
      <div>
          <Slide products = {this.state.products[0]}/>
          <Slide products = {this.state.products[1]}/>
      </div>
    )
  }
}

export default App;