import React from 'react';
import "./RandomUser.css";

const RandomUser = (props) => {
    const { userData } = props;
    return (
        
            <div className="user-card">
                <img src={userData.picture.large} alt={`${userData.name.first} ${userData.name.last}`}/>
                <p>{userData.name.first} {userData.name.last}</p>
            </div>
        
    );
}





export default RandomUser;