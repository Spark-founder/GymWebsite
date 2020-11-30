import React, { useState } from 'react'
import firebase from '../firebase'
import { storage } from '../firebase'
import './Server.css'
import './Edit.css'
import uuid from 'react-uuid'

function Edit() {
    const [url, setUrl] = useState("")
    const [gender, setgender]=useState('MALE')
    const [image, setImage] = useState(null)
    var [progress, setProgress] = useState()
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url)
                    })
            }
        )
    }
    var progress_p = progress + "%"
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [Membership, setMembership] = useState('')
    const [Pn, setPn] = useState('')
    const [Email, setEmail] = useState('')
    const [Branch, setBranch] = useState('Yamuna Vihar')
    const [loading, setloading] = useState(false)
    var Currentage= ''
    function inputChecker(e){
        if(/\d/.test(e)){
            Currentage=Currentage+e
            console.log(e)
        }
    }
    var today = new Date().toLocaleDateString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
    function onSubmit(e) {
        var id=uuid()
        e.preventDefault()
        setloading(true)
        firebase
            .firestore()
            .collection('account')
            .add({
                id,
                name,
                age,
                Membership,
                Pn,
                Email,
                Branch,
                url,
                gender,
                today,
            })
            .then(() => {
                setName('')
                setAge('')
                setMembership('')
                setPn('')
                setEmail('')
                setBranch('')
                setUrl('')
                setgender('Yamuna Vihar')
                id=''
            })
    }
    return (
        <div>
            <h4 className='text-center text-capitalize text-info'>{loading ? 'SucessFully Done!' : null}</h4>
            <div style={{'display':'flex'}}>
            <div className="info">
                    {progress == 0 ? null :
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ "width": progress_p }}>
                                <span class="sr-only">70% Complete</span>
                            </div>
                        </div>
                    }
                    <label for="img" className="upload_img"><img src={url||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv-05b8CbxEaDFNR3JZIr8GIpk0A3P8icTA&usqp=CAU'} className="image_css" ></img></label>
                    <input type="file" accept="image/*" onChange={handleChange} id="img" style={{ 'display': 'none' }} required />
                    <br />
                    <button onClick={handleUpload} className="upload_button submit_button">Upload</button>
                </div>
            <form onSubmit={onSubmit} className="form Main_edit" >
                <div className="form_input" required>
                    <select className="basic_css input_taker " value={Branch} onChange={e => setBranch(e.currentTarget.value)} placeholder="Brach Location" required >
                        <option value='Yamuna Vihar'>Yamuna Vihar</option>
                        <option value="add_branch">Add another Branch</option>
                    </select>
                    <select className="basic_css input_taker " value={gender} onChange={e=>setgender(e.currentTarget.value)} required>
                        <option value='Male'>MALE</option>
                        <option value='FEMALE'>FEMALE</option>
                        <option value='OTHERS'>OTHERS</option>
                    </select>
                    <input className="basic_css input_taker " type="text" value={name} onChange={e => setName(e.currentTarget.value.toUpperCase())} placeholder="Name" required />
                    <input className="basic_css input_taker " type="tel"  value={age} onChange={e =>setAge(e.currentTarget.value)} placeholder="Age" required />
                    <input className="basic_css input_taker " type="text" value={Membership} onChange={e => setMembership(e.currentTarget.value.toUpperCase())} placeholder="Duration in months" required />
                    <input className="basic_css input_taker " type="text" value={Pn} onChange={e => setPn(e.currentTarget.value.toUpperCase())} placeholder="Phone Number" required />
                    <input className="basic_css input_taker " type="text" value={Email} onChange={e => setEmail(e.currentTarget.value.toUpperCase())} placeholder="Email Address" required />
                    <button className="submit_button">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Edit
