import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className="contact_form">
            <h1 style={{"textAlign": 'center'}}>Contact Us</h1>
            <input type="text" className="input_css" placeholder="Name"/>
            <input type="text" className="input_css" placeholder="Email Id"/>
            <textarea className="input_css textarea_css" placeholder="Send Message to us!"/>
            <button className="contact_us_button contact_us_btn_css_a button_css">Send Us</button>
        </div>
    )
}

export default Contact
