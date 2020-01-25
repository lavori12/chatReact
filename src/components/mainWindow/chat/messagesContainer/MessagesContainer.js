import React from 'react';
import styles from './MessagesContainer.module.css'
import Message from "./message/Message";

const MessagesContainer = (props) => {

    return (
        <div id={styles.messagesContainer}>
            {props.appState.messages.map(message => <Message key={message.id} messageData={message} users={props.appState.users} currentLogin = {props.appState.currentLogin}/>)}
        </div>
    )
};

export default MessagesContainer;