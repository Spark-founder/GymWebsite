import React, { useState, useEffect } from 'react'
import './Member.css'
import firebase from '../../firebase'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const SORT_OPTIONS = {
    'Age_Asc': { column: 'age', direction: 'asc' },
    'Name_Desc': { column: 'name', direction: 'desc' },
    'Membership_Desc': { column: 'Membership', direction: 'desc' }
}
function UserEdit(sortBy = 'Name_Desc') {
    const [account, setaccount] = useState([{}]) 
    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection("account")
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
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
function Member() {
    const [sortBy, setsortBy] = useState('Name_Desc')
    const [sortByR, setsortByR] = useState('')
    const user_edit=(e)=>{
    }
    const Delete=(id)=>{
        const unsubscribe = firebase.firestore().collection("account")
        unsubscribe.doc(id).delete();
    }
    const user = UserEdit(sortBy)
    return (
        <div>
            <div className="SearchBar">
                <select className="select_css basic_css" value={sortBy} onChange={e => setsortBy(e.currentTarget.value)}>
                    <option value='Name_Desc'>Name</option>
                    <option value='Age_Asc'>Age</option>
                    <option value='Membership_Desc'>Membership</option>
                </select>
                <input placeholder={"Search " + SORT_OPTIONS[sortBy].column} className="input_taker basic_css" onChange={e => setsortByR(e.currentTarget.value.toUpperCase())} />
            </div>
            <div>
                {user
                    .filter((account) => {
                        var string = account.name + ' '
                        if (string.includes(sortByR)) {
                            return account
                        }
                    })
                    .map((account) =>
                        <div key={account.id} className="user_list_item" onClick={e=>user_edit(account.name)}>
                            <img src={account.url||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1srbP4ifbyg4WoyVO8KiZlNlO0qjFhw_7A&usqp=CAU'} alt="" className="image_avatar"></img>
                            <div>
                                <h3 onClick={()=> Delete(account.id)} style={{'cursor':'pointer'}} className='EditIcon '><DeleteOutlineIcon/></h3>
                                <h3 className='text-center'>{account.name}</h3>
                                <div className='info_user time'>
                                    <label className="label label-default">JOINED ON : </label>
                                    <h4 className='text-info'>{account.today}</h4>
                                </div>
                            <div style={{'display': 'flex'}}>
                            <div>
                                <div className='info_user'>
                                    <label className="label label-default">Gender: </label>
                                    <h5>{account.gender}</h5>
                                </div>

                                <div className='info_user'>
                                <label className="label label-default">Age :</label>
                                <h5>{account.age}</h5>
                                </div>
                                
                                <div className='info_user'>
                                <label className="label label-default">Membership :</label>
                                <h5>{account.Membership}</h5>
                                </div>
                            </div>
                            <div>
                                <div className='info_user'>
                                <label className="label label-default"> Phone Number:</label>
                                <h5>{account.Pn}</h5>
                                </div>

                                <div className='info_user'>
                                <label className="label label-default">Email Id : </label>
                                <h5>{account.Email}</h5>
                                </div>
                                

                                <div className='info_user'>
                                <label className="label label-default">Branch :</label>
                                <h5>{account.Branch}</h5>
                                </div>
                            </div>
                            
                            <div className='info_user'>
                                <label className="label label-default">User Id :</label>
                                <h5>{account.userId}</h5>
                            </div>
                            
                            </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export { Member as default } 
