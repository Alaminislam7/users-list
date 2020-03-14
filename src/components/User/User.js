import React from 'react';
import '../User/User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    

    const {username, img, email, phone, address, company} = props.user
    return (
        <div className='user-list'>
            <img src={img} alt=""/>
            <div className="user-information">
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>City: {address.city}</p>
                <p>Company Name: {company.name}</p>
                <button 
                onClick={ () => props.handleAddFriend(props.user) } 
                className = 'btn'>
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Add Friend</span></button>
            </div>
        </div>
    );
};

export default User;