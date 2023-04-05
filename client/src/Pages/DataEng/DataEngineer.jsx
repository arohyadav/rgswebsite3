import React, {useState} from 'react'
import './DataEngineer.scss'
//import BtnSlider from './BtnSlider'
//import dataSlider from './dataSlider';
import DataEngslide from "./DataEngslide"

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== DataEngslide.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === DataEngslide.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(DataEngslide.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {DataEngslide.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/rgs-img/dataEng${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            {/* <BtnSlider moveSlide={nextSlide} direction={"next"} /> */}
            {/* <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}