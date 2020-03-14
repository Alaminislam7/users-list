import React, { useState } from 'react';
import fakeData from '../../fakeData/userInformation';
import '../Users/Users.css'
import User from '../User/User';
import Friend from '../Friend/Friend';

const Users = () => {
    const [users, setUser] = useState(fakeData)
    const [friends, setFriends] = useState([])
    const handleAddFriend = () => {
        console.log('add friend', users);
        const newFriends = [...friends, users];
        setFriends(newFriends);
    }
    return (

        <div className = 'users-container'>
            <div className="users">
                {
                    users.map(user=>
                    <User user = {user}
                    handleAddFriend = {handleAddFriend}
                    >
                    </User>)
                }
            </div>
            <div className="total-friends">
                {
                    <Friend friends = {friends}></Friend>
                }
            </div>
        </div>
    );
};

export default Users;