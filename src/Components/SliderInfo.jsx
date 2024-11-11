import { useRef } from "react";
import slides from "../Data/dataSlider.json";
import Slider from 'react-slick';
import SliderItem from "./SliderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SliderInfo() {

    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        fade: true,
        cssEase: 'linear'
    }

    return (
        <div className="slider">
            <div className="sliderArrows">
                <button className="arrow arrowPrev" onClick={previous}>
                    <FontAwesomeIcon icon={faChevronLeft} className="arrowIcon" />
                </button>
                <button className="arrow arrowNext" onClick={next}>
                    <FontAwesomeIcon icon={faChevronRight} className="arrowIcon" />
                </button>
            </div>
            <Slider ref={slider => { sliderRef = slider; }} {...settings}>
                {slides.map((slide, index) => {
                    return <SliderItem data={slide} key={index} />
                })}
            </Slider>
        </div>
    )
}

export default SliderInfo