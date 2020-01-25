import React from 'react';
import MessagesContainer from "./messagesContainer/MessagesContainer";
import NewMessage from "./newMessage/NewMessage";
import styles from "./Chat.module.css"


const Chat = (props) => {

    return (
        <div id={styles.chat}>
            <MessagesContainer appState={props.appState}/>
            <NewMessage socket={props.appState.socket}/>
        </div>
    )
};

export default Chat;