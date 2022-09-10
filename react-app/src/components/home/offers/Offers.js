import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import OffersCard from "./OffersCard"

export default function Offers(props) {
    


    const settings = {
        infinite: true,
        dots: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        auutoplaySpeed: 2000,
        arrows: false,
    }

    

    return (
        <div className="container" style={{marginTop: 50}}>
            <Slider {...settings}>
                {props.images.map((item) => (
                    <OffersCard 
                        data={item}
                    />
                ))}
            </Slider>
        </div>
        
    )

}
