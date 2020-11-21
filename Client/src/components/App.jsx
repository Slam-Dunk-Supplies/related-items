import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slide from './Slide.jsx';
import Arrow from './Arrow.jsx';
import ToggleBar from './ToggleBar.jsx';
import ReactCSSTransitionGroup from 'react-transition-group';




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

    const slides = () => (
        <>
            {products.length !== 0 && [
                <Slide products={products[currentSlideIndex]} />,
                <Slide products={products[currentSlideIndex + 1]} />,
                <Slide products={products[currentSlideIndex + 2]} />,
                <Slide products={products[currentSlideIndex + 3]} />,
            ]
            }
        </>
    );
    const toggle = (slideNum) => {
        setCurrentSlideIndex(slideNum)
    }


    const toggleBar = () => (
        <>
            <ToggleBar currentSlideIndex ={currentSlideIndex} buttonName={'firstToggleBtn'} toggle={toggle} slideNum={0} />
            <ToggleBar currentSlideIndex ={currentSlideIndex} buttonName={'secondToggleBtn'} toggle={toggle} slideNum={4} />
            <ToggleBar currentSlideIndex ={currentSlideIndex} buttonName={'thirdToggleBtn'} toggle={toggle} slideNum={8} />
            <ToggleBar currentSlideIndex ={currentSlideIndex} buttonName={'fourthToggleBtn'} toggle={toggle} slideNum={12} />

        </>
    );

    return (
        <>
            <div id='component'>
                <div className='carousel'>
                    <Arrow
                        direction="left"
                        clickFunction={previousSlide}
                        glyph="<" />
                    {slides()}
                    < Arrow
                        direction="right"
                        clickFunction={nextSlide}
                        glyph=">" />

                </div>
                <div id='toggleBar'>
                    {toggleBar()}
                </div>
            </div>
        </>
    )
}


export default App;
