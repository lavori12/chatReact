import React from 'react';
import LeftPanel from "./leftPanel/LeftPanel";
import Chat from "./chat/Chat";
import styles from "./MainWindow.module.css"

const MainWindow = (props) => {

    return (
        <div className={styles.main}>
            <LeftPanel appState={props.appState}/>
            <Chat appState={props.appState}/>
        </div>
    )
};

export default MainWindow;