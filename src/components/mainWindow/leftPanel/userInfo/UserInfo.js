import React from 'react';
import styles from './UserInfo.module.css';


const UserInfo = (props) => {

    let srcPhoto;
    if ( props.members && props.members[props.user].photo) {
        srcPhoto = props.members[props.user].photo
    } else {
        srcPhoto = 'src/components/mainWindow/leftPanel/userInfo/images/NO.jpg'
    }

    return (
        <div id='userInfoContainer'>
            <img src={srcPhoto} alt='' id={styles.currentUserPhoto}/>
            <span id='currentUserName'> {props.members[props.user].name} </span>
        </div>
    )
};

export default UserInfo;