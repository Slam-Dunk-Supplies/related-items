import React from 'react';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products
        };
    }
    render() {
        return (

            <div id='container'>
                <div id='picture'>
                    <img src={this.state.products.image} />
                </div>
                <h1>{this.state.products.title} ${this.state.products.price}</h1>
                <p>{this.state.products.description} </p>
            </div>
        )
    }
}
export default Slide;