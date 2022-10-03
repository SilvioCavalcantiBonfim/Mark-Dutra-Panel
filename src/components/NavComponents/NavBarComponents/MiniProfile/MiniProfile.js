import React from 'react';
import './MiniProfile.css';

const Miniature = (props) => {
    return <div className='mini__profile' style={{background: `var(--color-2) url(https://cdn.discordapp.com/avatars/${props.userInfo.id}/${props.userInfo.avatar}) no-repeat scroll 0px 0px / 50px 50px padding-box border-box`}}>
        <span title='Logout' onClick={props.logoutHandle}>{props.userInfo.username}#{props.userInfo.discriminator}</span>
    </div>;
}

export default Miniature;