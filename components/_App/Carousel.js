import React, { useState } from 'react'
import "./Carousel.module.css"

export const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel-item" style={{ width: width}}>
            {children}
        </div>
    )
}

export function Carousel({children}) {
    const [activeIndex, setActiveIndex] = useState();

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel-wrapper">
            <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: "100%"});
                    })
                }
            </div>
            <div className="indicators">
                <button onClick={() => {updateIndex(activeIndex - 1 )}}> <img alt="Eton Auctions" src="/assets/arrow-left.svg"/> </button>
                {React.Children.map(children, (child, index) => {
                    return  (
                        <button 
                        className={`${index === activeIndex ? "active" : ""}`}
                        onClick={() => {updateIndex(index)}}>
                            {index + 1}
                        </button>
                    )
                })}
                <button onClick={() => {updateIndex(activeIndex + 1 )}}> <img alt="Eton Auctions" src="/assets/arrow-right.svg"/>  </button>
            </div>
        </div>
    
    )
}

export default Carousel