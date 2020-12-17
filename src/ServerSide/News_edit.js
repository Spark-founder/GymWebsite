import React,{useState} from 'react'
import './News_edit.css'
import firebase from '../firebase'
import ReactColorPicker from '@super-effective/react-color-picker';


function News_edit() {
    const [heading,Setheading]=useState("")
    const [subHeading, SetSubHeading] = useState("")
    const [content, setContent] = useState("")
    const [color, setColor]=useState('#3cd6bf')
    function onSubmit(e){
        var today = new Date().toLocaleDateString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
        e.preventDefault()
        firebase
                .firestore()
                .collection('news')
                .add({
                    heading,
                    subHeading,
                    content,
                    color,
                    today,
                })
                .then(()=>{
                    Setheading("")
                    SetSubHeading("")
                    setContent("") 
                    setColor('#3cd6bf')   
                })
    }
    const onColorChange = (updatedColor) => {
        setColor(updatedColor);
      };
    return (
        <div>
            <h1 className="text-center">LAUNCH YOUR NEWS TODAY </h1>
            <ReactColorPicker color={color} onChange={onColorChange} className='color_range'/>
            <form onSubmit={onSubmit}>
            <div className='message' style={{'backgroundColor': color}}>
                <textarea className="text_area" placeholder="HEADLINE" rows="1" value={heading} cols="25" style={{'backgroundColor': color}} onChange={(e)=>{Setheading(e.currentTarget.value)}}/>
                <textarea className="text_area" placeholder="SUB HEADLINE" value={subHeading} rows="1" cols="25" style={{'backgroundColor': color}} onChange={e=>SetSubHeading(e.currentTarget.value)}/>
                <textarea className="text_area" placeholder="CONTENT" value={content} rows="10" cols="25"  style={{'backgroundColor': color}} onChange={e=>{setContent(e.currentTarget.value)}}/>
            </div>
            <button className="message_button">Submit</button>
            </form>
        </div>
    )
}

export default News_edit
