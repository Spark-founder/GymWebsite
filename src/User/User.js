import React ,{useState,useEffect}from "react";
import "./User.css";
import Navbar from "../Navbar/Navbar";
import 'react-calendar/dist/Calendar.css';
import firebase from '../firebase'

function UserEdit(sortBy = 'Name_Desc',UserID = '') {
  const [account, setaccount] = useState([{}])
  useEffect(() => {
      const unsubscribe = firebase
          .firestore()
          .collection("account")
          .where('userId','==',UserID)
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

function User(UserId) {
  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const user = UserEdit('Name_Desc',UserId['UserId'])
  var today = new Date()
  return (
    <div>
      <Navbar />
      <div className="alert alert-info" role="alert">
            Today is Holiday
       </div>
      <div>
        <br />
        {
          user.map((account)=>
          <div key={account.id}>

            <h1 className='text-capitalize text-center text-info Time'>{account.Membership-Math.floor(getDifferenceInDays(today,  new Date(account.today)))} Days Left</h1>
            <h3 className='text-center text-muted'>JOINED ON</h3>
            <div className='Time_left text-capitalize text-center'>{account.today}</div>

          </div>
        )
        }
        <div>
        </div>
      </div>
    </div>
  );
}

export default User;
