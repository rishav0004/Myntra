import React from 'react'
import {useEffect,useState} from 'react'

import {firebase} from '../../firebase'
import '../Css file/profile.css'
import Avatar from '@mui/material/Avatar';

function Profile() {
    const signOut =()=>{
            firebase.auth().signOut()
    }

    const [userid, setUserid] = useState([])
    const userdata = () =>{
        
        const user = firebase.auth().currentUser;
        setUserid(user)
        console.log(user)
    }


    useEffect(() => {
        userdata()
    }, [])

    return (
        <div className='bag'>
            
               <div className="customer__detaik">
                <div className="user__name">
                    
                    <Avatar alt="profile" src={userid.photoURL}/>   
                    <h3 style = {{paddingLeft:'20px'}}>Hello,{userid.displayName} </h3>
                </div>
                
                <h4> {userid.email}</h4>
            </div>
                
            <div className="butn">
                <button onClick={signOut}>Sign out</button>
            </div>
            
        </div>
    )
}

export default Profile
