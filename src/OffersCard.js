import React from "react"
import "./css/offercCard.css"

export default function OffersCard(props) {
    return (
        <div className="offer" style={{backgroundImage: "url(" + props.data.image + ")"}}>
            <div className="offer-tag">{props.data.discount}</div>
            <p>{props.data.name}</p>
            <p>{props.data.main_price}</p>
            <p>{props.data.main_price - props.data.main_price * props.data.discount/100}</p>
            <button>Order Now</button>
        </div>
    )
}