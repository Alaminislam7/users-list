import React from 'react';
import './Friend.css';

const Friend = (props) => {
    return (
        <div className='total-friends'>
            <h2>Total Friends: <span>{props.friends.length}</span></h2>
        </div>
    );
};

export default Friend;