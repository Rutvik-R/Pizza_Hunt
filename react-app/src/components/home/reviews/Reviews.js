import React from "react"
import "../../../css/reviews.css"
export default function Reviews(props) {
    return (
        <div className="review_card">
            <div className="image">
                {<img src={props.data.profile_pic} alt="hello"/>}
            </div>
            <h2>{props.data.name}</h2>
            <center>
                {props.data.rating > 0 ? <i className="fa fa-star checked" /> : <i className="fa fa-star" />}
                {props.data.rating-1 > 0 ? <i className="fa fa-star checked" /> : <i className="fa fa-star" />}
                {props.data.rating-2 > 0 ? <i className="fa fa-star checked" /> : <i className="fa fa-star" />}
                {props.data.rating-3 > 0 ? <i className="fa fa-star checked" /> : <i className="fa fa-star" />}
                {props.data.rating-4 > 0 ? <i className="fa fa-star checked" /> : <i className="fa fa-star" />}
            </center>
            <p>{props.data.review}</p>
        </div>
    )
}

