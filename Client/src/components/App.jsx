import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slide from './slide.jsx';
import Arrow from './Arrow.jsx';


function App() {
    const [products, setProducts] = useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        fetchProducts()
    });

    const fetchProducts = () => {
        axios.get('/data')
            .then(({ data }) => {
                setProducts(data);
            })
    };

    const nextSlide = () => {
        if (currentSlideIndex===96 ) {
            setCurrentSlideIndex(0)
        } else {
        setCurrentSlideIndex(currentSlideIndex + 4);
        }
    };

    const previousSlide = () => {
        if (currentSlideIndex === 0) {
            setCurrentSlideIndex(96);
        } else {
        setCurrentSlideIndex(currentSlideIndex - 4);
        }
    };

    return (
        <div className='carousel'>
            <Arrow
                direction="left"
                clickFunction={previousSlide}
                glyph="&#9664;" />
            {products.length !== 0 &&
                [<Slide products={products[currentSlideIndex]} />,
                <Slide products={products[currentSlideIndex + 1]} />,
                <Slide products={products[currentSlideIndex + 2]} />,
                <Slide products={products[currentSlideIndex + 3]} />
                ]
            }
            < Arrow
                direction="right"
                clickFunction={nextSlide}
                glyph="&#9654;" />
        </div>
    )
}


export default App;