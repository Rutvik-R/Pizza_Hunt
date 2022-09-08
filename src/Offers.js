import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import OffersCard from "./OffersCard"

// {/* <div data-aos="fade-up" className="TopOffers" >
//             <div data-aos="fade-down-right"  id="Offers_title" > Our Top Offers  </div>
//             <div  className="offers">
//                 <div data-aos="flip-left" id="offer">
//                         <span className="offer_discount">{data[(i)%n].discount}% OFF</span>
//                     <center>
//                         <img src={data[i%n].image} alt="i1" width="500" height="600" />
//                         <span>{data[i%n].name}</span>
//                         <span><del>{data[i%n].main_price} $</del></span>
//                         <strong>Only on : {data[i%n].main_price * (100 - data[i%n].discount) / 100} $</strong>
//                         {/* <span id="Discount">{data[i%n].discount}% OFF</span> */}
//                         <button >Track Order</button>
//                     </center>
//                 </div>
//                 <div data-aos="flip-left" id="offer">
//                         <span className="offer_discount">{data[(i+1)%n].discount}% OFF</span>
//                     <center>
//                         <img src={data[(i+1)%n].image} alt="i2" width="500" height="600" />
//                         <span>{data[(i+1)%n].name}</span>
//                         <span><del>{data[(i+1)%n].main_price} $</del></span>
//                         <strong>Only on : {data[(i+1)%n].main_price * (100 - data[(i+1)%n].discount) / 100} $</strong>
//                         <button>Track Order</button>
//                     </center>
//                 </div>
//                 <div data-aos="flip-right" id="offer">
//                         <span className="offer_discount">{data[(i+2)%n].discount}% OFF</span>
//                     <center>
//                         <img src={data[(i+2)%n].image} alt="i3" width="500" height="600" />
//                         <span>{data[(i+2)%n].name}</span>
//                         <span><del>{data[(i+2)%n].main_price} $</del></span>
//                         <strong>Only on : {data[(i+2)%n].main_price * (100 - data[(i+2)%n].discount ) / 100} $</strong>
//                         {/* <span id="Discount">{data[(i+2)%n].discount}% OFF</span> */}
//                         <button>Track Order</button>
//                     </center>
//                 </div>
//                 <div data-aos="flip-right" id="offer">
//                         <span className="offer_discount">{data[(i+3)%n].discount}% OFF</span>
//                     <center>
//                         <img src={data[(i+3)%n].image} alt="i3" width="500" height="600" />
//                         <span>{data[(i+3)%n].name}</span>
//                         <span><del>{data[(i+3)%n].main_price} $</del></span>
//                         <strong>Only on : {data[(i+3)%n].main_price * (100 - data[(i+3)%n].discount ) / 100} $</strong>
//                         {/* <span id="Discount">{data[(i+3)%n].discount}% OFF</span> */}
//                         <button>Track Order</button>
//                     </center>
//                 </div>
                

//             </div>
//     </div> */}

export default function Offers(props) {
    


    const settings = {
        infinite: true,
        dots: false, 
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        auutoplaySpeed: 2000,
        arrows: false,
    }

    

    return (
        <div className="container">
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
