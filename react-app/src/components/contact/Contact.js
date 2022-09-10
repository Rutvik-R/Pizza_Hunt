import React from "react"
import Navbar from "../home/navbar/Navbar";
import Footer from "./Footer";
import GoogleMapReact from 'google-map-react';
import "../../css/contact.css"
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Contact(){
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
    return (
        <div>
            <Navbar data="fixed" color0="white" color1="white" color2="red"/>
          <div style={{height: 80}}></div>
          <div className="contact-title"><h1>Contact Us</h1></div>
          <div className="Contact_second_title"><h1>call us or visit us</h1></div>
          <div className="contact-box">
          <div className="contact-box1">
          <i className="fa fa-mobile-phone fa-4x"></i>
          <p style={{fontWeight:700,fontSize:"3vh",marginTop:"3vh"}}>Phone:</p>
          <p style={{fontWeight:700,fontsize:"2vh",marginTop:"2vh",opacity:0.5}}>+ 44 123 456 78 90</p>
          <p style={{fontWeight:700,fontsize:"2vh",marginTop:"1vh",opacity:0.5}}>+ 844 123 444 77 88</p>
          </div>
          <div className="contact-box2">
           <i className="fa fa-map-marker fa-4x" ></i>
           <p style={{fontWeight:700,fontSize:"3vh",marginTop:"3vh"}}>Address</p>
           <p style={{fontWeight:700,fontsize:"2vh",marginTop:"2vh",opacity:0.5}}>Box 565, Pinney's Beach, Charlestown,</p>
           <p style={{fontWeight:700,fontsize:"2vh",marginTop:"1vh",opacity:0.5}}>Nevis, West Indies, Caribbean</p>
          </div>
          <div className="contact-box3">
            <i className="fa fa-envelope fa-4x"></i>
            <p style={{fontWeight:700,fontSize:"3vh",marginTop:"3vh"}}>Email:</p>
            <p style={{fontWeight:700,fontsize:"2vh",marginTop:"2vh",opacity:0.5}}>contact@example.com</p>
            <p style={{fontWeight:700,fontsize:"2vh",marginTop:"1vh",opacity:0.5}}>info@example.com</p>
          </div>
          
        
        </div>
        <div className="contact-main">
        <div className="contact-flex">
        <div style={{ height: '80vh', width: '50%' }} >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
       
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    <div className="contact-map-box">
        <h1>Send us a Message</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form action="">

            <input type="text" placeholder="Your name" className="contact-input"/>
            <br />
            <input type="email" placeholder="Email" className="contact-input"/>
            <br />
            <input type="text" placeholder="Subject" className="contact-input"/>
            <br />
            <textarea placeholder="comment" className="contact-input" rows={8.5}></textarea><br />
            <input type="submit" className="contact-submit"/>
        </form>
    </div>
    </div>
    </div>
    <Footer />
    </div>
    )
}