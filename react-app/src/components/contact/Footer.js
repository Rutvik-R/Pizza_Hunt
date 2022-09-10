
import React from "react";
import "../../css/footer.css"
export default function Footer(){
    return (
        <> 
            
            <div className="footer-bg">
                <h1 className="font">The Pizza Box</h1>
                <div className="footer-flex1">
                    <div className="footer-box1">
                    <center><h3>ADDRESS</h3></center>
        <center><p class="opacity">570 8th Ave,<br/>

          New York, NY 10018<br/>
          United States</p></center>
                    </div>
                    <div className="footer-box1">
                    <center><h3>BOOK A TABLE</h3></center>
        <center><p className="opacity">Dogfood och Sliders foodtruck.<br/>
          Under Om oss kan ni läsa</p></center>
          <center><h3 className="colour">(850) 435-4155</h3></center>
                    </div>
                    <div className="footer-box1">
                    <center><h3>OPENING HOUR</h3></center>
        <center><p className="opacity">Monday – Friday: 8am – 4pm <br/>
          Saturday: 9am – 5pm</p></center>
          <div style={{textAlign:"center"}}>
          <a href={"https://www.youtube.com/?feature=ytca"} style={{textDecoration:"none",color:"white"}} ><i className="fa fa-youtube icon" style={{fontSize:"35px",color:"white"}}></i></a>
          <a href={"https://web.whatsapp.com/"} style={{textDecoration:"none",color:"white"}} ><i className="fa fa-whatsapp icon" style={{fontSize:"35px",paddingLeft:"10px",color:"white"}}></i></a>
          <a href={"https://www.facebook.com/"} style={{textDecoration:"none"}} ><i className="fa fa-facebook icon" style={{fontSize:"35px",paddingLeft:"10px",color:"white"}}></i></a>
          <a href={"https://www.instagram.com/"} style={{textDecoration:"none"}} ><i className="fa fa-instagram icon" style={{fontSize:"35px",paddingLeft:"10px",color:"white"}}></i></a>
          <a href={"https://twitter.com/"} style={{textDecoration:"none"}} ><i className="fa fa-twitter icon" style={{fontSize:"35px",paddingLeft:"10px",color:"white"}}></i></a>
                    </div>

                  
                </div>
                <div className="footer-box1">
        <center><h3>NEWSLETTER</h3></center>
        <center><p className="opacity">Subscribe to the weekly newsletter for all<br/>
          the latest updates</p></center>
          <input type="email"name="name" id="email" placeholder="Your email...."required size="40px" className="footer-input"/><button className="btn6">subscribe</button>
      </div> 
                
            </div>
            </div>
            <footer>
      <div class="center">
          Copyright &copy; www.YummyMeal.com. All rights reserved!
          
      </div>
  </footer>
   
        </>
    )
}