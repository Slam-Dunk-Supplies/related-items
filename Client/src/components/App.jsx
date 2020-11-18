import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slide from './slide.jsx';
import Arrow from './Arrow.jsx';

function App() {
    const MAX_NUM_SLIDES = 12;
    const NUM_IMAGES_TO_SHIFT = 4;
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
        if (currentSlideIndex === MAX_NUM_SLIDES) {
            setCurrentSlideIndex(0)
        } else {
            setCurrentSlideIndex(currentSlideIndex + NUM_IMAGES_TO_SHIFT);
        }
    };

    const previousSlide = () => {
        if (currentSlideIndex === 0) {
            setCurrentSlideIndex(MAX_NUM_SLIDES);
        } else {
            setCurrentSlideIndex(currentSlideIndex - NUM_IMAGES_TO_SHIFT);
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
