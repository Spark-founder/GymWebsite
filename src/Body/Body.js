import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import './Body.css'
import '../animation/Body_a.css'
import Contact from '../ContactUs/Contact'
function Body() {
    const on=()=>{document.getElementById("overlay").style.display = "block"}
    const off=()=>{document.getElementById("overlay").style.display = "none"}
    return (
        <div style={{'overflow': 'auto'}}>
            <div className="col-sm-6"><br /><img src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg?w=800&quality=85" alt="image" className="img-responsive img-rounded" /></div>
            <div className="body_css">
            <div className="style_dblue_css css_style_a"></div>
            <div className="style_lblue_css css_style_a"></div>
            <div className="col-sm-6"><br /><h1 className="quotes_css">IMPOSSIBLE <br/>IS <br/>JUST A <br/><span style={{ 'color': 'red' }}>WORD</span></h1></div>
            <button onClick={()=>{on()}} className="contact_us_button contact_us_btn_css_a">CONTACT US</button>
            <div id="overlay" >
                <CancelIcon onClick={()=>{off()}} style={{'fontSize': 40,'color':'white'}}/>
                <div id="text"><Contact/></div>
            </div>

        </div>
        </div>
    )
}

export default Body
