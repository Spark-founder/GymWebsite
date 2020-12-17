import React, { useState, useEffect } from 'react'
import './Login.css'
import UseWindowSize from '../useWindowsize'
import firebase from '../firebase'

function UserEdit(sortBy = 'Name_Desc') {
    const [account, setaccount] = useState([{}])
    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection("account")
            .onSnapshot((snapshot) => {
                const newUser = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setaccount(newUser)
            })
        return () => unsubscribe()
    }, [sortBy])
    return account
}


function Login(props) {
    const user = UserEdit()
    function Result(userId,password) {  
        user
            .filter(account => {
                if (account.userId === userId && password === account.pass) {
                    props.receiveValue(account.userId)
                    window.open('./user','_blank')
                }
            })
    }

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    var size = UseWindowSize().height;
    var size_px = size + 'px'
    const onSubmit = (e) => {
        e.preventDefault()
        Result(userId, password)


    }

    return (
        <div className="Login_css" style={{ height: size_px }} >
            <img className="img-responsive logo_css_login" src="./Resources/CROSSFIT_LAND_LOGO-2-removebg.png"></img>
            <div className="main_page">
                <div className="col-sm-6">
                    <img src="./Resources/gym.jpg" alt="gym" className="img-responsive img-rounded"></img>
                </div>
                <div className="col-sm-6">
                    <h3 className="text-center">LOGIN</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1 label">Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => { setUserId(e.currentTarget.value) }} required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1 label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.currentTarget.value)} required />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button className="btn btn-primary button_login ">Submit</button>
                    </form>                    
                </div>
            </div>
        </div>
    )
}

export default Login
