import React from "react"
import "../../../css/offercCard.css"


export default function OffersCard(props) {
    return (
        <div className="offer">
            <div className="image" style={{backgroundImage: "url(" + props.data.image + ")"}}/>
            <div className="content">
                <div className="star" style={{backgroundImage: `url(images/offers/star-offers.webp)`}}>{props.data.discount}%</div>
                <div className="day">
                    OFF ON {props.data.day}
                </div>
                <div className="cococola"></div>
                <div className="text">
                    <p>Medium and Large size pizza ONLY</p>
                </div>
            </div>
        </div>
    )
}