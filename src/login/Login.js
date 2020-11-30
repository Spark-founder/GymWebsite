import React from 'react'
import './Login.css'
import UseWindowSize from '../useWindowsize'

function login() {
    var size = UseWindowSize().height;
    var size_px = size + 'px'
    console.log(size)
    return (
        <div className="Login_css" style={{ height: size_px }}>
            <img className="img-responsive logo_css_login" src="./Resources/CROSSFIT_LAND_LOGO-2-removebg.png"></img>
            <div  className="main_page">
                <div className="col-sm-6">
                    <img src="./Resources/gym.jpg" alt="gym" className="img-responsive img-rounded"></img>
                </div>
                <div className="col-sm-6">
                    <h3 className="text-center">LOGIN</h3>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-che    ck">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
