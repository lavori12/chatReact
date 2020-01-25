import React from 'react';
import AuthWindow from "./authWindow/AuthWindow";
import MainWindow from "./mainWindow/MainWindow";

const StartWindow = (props) => {

    return (
        <div>
            {props.appState.logged ? <MainWindow appState={props.appState}/> : <AuthWindow socket={props.appState.socket}/>}
        </div>
    )
};

export default StartWindow;