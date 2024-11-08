// Post for Blog Section
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/images/profile-user.png';

const Post = () => {
    const [username, setUsername] = useState(''); // State to hold the username
    const navigate = useNavigate();

    useEffect(() => {
        // Get the username from localStorage
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername); // Set the username to state
        }
    }, []); // This will run only once when the component mounts
    return (
        <div>
            <div className="post-container">
            <div className="user-container">
        {/* Always show the username, fetched from localStorage */}
        <button className="userName" onClick={() => navigate('/settings')}>
          <img className="profile-nav" src={profile} alt="profile" />
        </button>

        <p onClick={() => navigate('/settings')}>{username || 'User'}</p>
      </div>
                <button>Create</button>
            </div>
        </div>
    )
}

export default Post
