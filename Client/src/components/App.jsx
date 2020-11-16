import React from 'react';
import axios from 'axios';
import example from '../example.js';
import Slide from './slide.jsx';



export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: example
        }

    }


    componentDidMount() {
        this.fetchProducts()
    }

    fetchProducts() {
        axios.get('/data')
            .then(({ data }) => {
                this.setState({
                    products: data
                })
            })
    }

    render() {
        return (
            <div>
                {console.log('from within return', this.state.products.length)}
                {this.state.products.length > 5 &&
                    <Slide products={this.state.products[0]} />
                }
                {this.state.products.length > 5 &&
                    <Slide products={this.state.products[1]} />
                }

            </div>
        )
    }
}