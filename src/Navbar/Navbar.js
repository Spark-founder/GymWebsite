import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import '../animation/Navbar_a.css'
import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PersonIcon from '@material-ui/icons/Person';
export default function Navbar() {
    return (
        <div>
            <div className="navbar_css container-fluid navbar_css_a">
                <div className="navbar_css_css">
                <Link to="/" className="login"><span className="navbar_items"><HomeIcon style={{ fontSize: '5vmin' }} className="icon_css" /></span></Link>
                <div className="navbar-header logo_css">
                    <a className="navbar-brand" href="#"><img src="../Resources/CROSSFIT_LAND_LOGO-2-removebg.png" className="img" alt="CrossFit" /></a>
                </div>
                <Link to="/news" className="login"><span className="navbar_items"><AnnouncementIcon style={{ fontSize: '5vmin' }} className="icon_css"/></span></Link>
                </div>
                <Link to="/login" className="login"><PersonIcon  style={{ fontSize: '5vmin'}}/></Link>
            </div>
            
        </div>
    )
}
