import React from 'react';
import UserInfo from "./userInfo/UserInfo";
import Header from "./welcome/Header";
import styles from './LeftPanel.module.css';


const LeftPanel = (props) => {

    return (
        <div id={styles.leftPanel}>
            <UserInfo user={props.appState.currentLogin} members={props.appState.members}/>
            <Header members={props.appState.members}/>
        </div>
    )
};

export default LeftPanel;