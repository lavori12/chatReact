import React from 'react';
import styles from './NewMessage.module.css'


class NewMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageText: ''
        };
        this.messageSend = this.messageSend.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
    }

    setMessageText(event) {
        this.setState(
            {messageText: event.target.value}
        )
    }

    messageSend() {
        if (this.props.socket && this.state.messageText) {
            this.props.socket.send(
                JSON.stringify({
                    payload: 'sendMessage',
                    data: this.state.messageText
                })
            );
        }
        this.setState({messageText: ''});
    }

    render() {
        return (
            <div id={styles.newMessage}>
                <input type='text' id='messageInput' placeholder='Введите сообщение' value={this.state.messageText} onChange={this.setMessageText}/>
                <button id='sendButton' onClick={this.messageSend}><strong>Отправить</strong></button>
            </div>
        )
    }
}

export default NewMessage;