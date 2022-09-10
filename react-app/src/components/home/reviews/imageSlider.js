import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"
import Reviews from "./Reviews"

export default function imageSlider(props) {
    const settings = {
        infinite: true,
        dots: true, 
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        auutoplaySpeed: 2000,
    }

    return (
        <div className="review-container">
            <Slider {...settings}>
                {props.images.map((item) => (
                    <Reviews 
                        data={item}
                    />
                ))}
            </Slider>
        </div>
    )
} 