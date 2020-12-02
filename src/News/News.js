import React,{useEffect,useState} from 'react'
import './News.css'
import firebase from '../firebase'
function UserEdit(sortBy = 'Name_Desc') {

    const [account, setaccount] = useState([{}])
    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection("news")
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
function News() {
    const user = UserEdit()
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner">
                    <div className="item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSacXgXW3-YFtf2zr68565nH1ukmUGj2Gkg&usqp=CAU" alt="Los Angeles" className="img_slideshow img-responsive"/>
                    </div>

                    <div className="item">
                        <img src="https://www.prinz-sportlich.de/wp-content/uploads/2017/09/Gym_viele_Ger%C3%A4te_Trainingsequipment_shutterstock_721723381-1500x710.jpg" alt="Chicago" className="img_slideshow img-responsive"/>
                    </div>

                    <div className="item">
                        <img src="https://overhaulfitness.ca/wp-content/uploads/2020/06/Blog-Cover-1500px-%C3%97-630px-not-necessarily-a-SM-appropriate-photo-2.png" alt="New York" className="img_slideshow   img-responsive"/>
                    </div>
                </div>
            </div>
            <h1 className='text-center '><strong>NEWS</strong></h1>
            {user.map((news)=>
                <div className="container " >
                <div className="jumbotron new_css" style={{'backgroundColor': news.color}}>
                    <h6 className='upload_time'>UPLOADED ON {news.today}</h6>
                    <div className="page-header">
                        <h2><strong>{news.heading}</strong></h2>
                    </div>
                    <h3>{news.subHeading}</h3>
                    <div>
                    {news.content}
                    </div>
                </div>
                </div>
            )}

        </div>
    )
}

export default News
