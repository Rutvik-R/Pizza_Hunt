import React from "react"
import "../../../css/navbar.css"

export default function Navbar(props) {
    return (
        <div className="navbar" style={{position: props.data}}>
            <div className="logo">

            </div>
            <ul>
                <li><a href="/" style={{color: props.color0}}>Home</a></li>
                <li><a href="/about" style={{color: props.color1}}>About</a></li>
                <li><a href="/contact" style={{color: props.color2}}>Contact</a></li>
            </ul>
        </div>
    )

    
}