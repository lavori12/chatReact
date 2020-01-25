import React from 'react';
import styles from './AuthWindow.module.css'

class AuthWindow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            name: ''
        };
        this.setName = this.setName.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.loginSend = this.loginSend.bind(this);
    };

    setName(event){
        this.setState({userName: event.target.value})
    };

    setLogin(event){
        this.setState({userLogin: event.target.value})
    };

    loginSend() {
        if (this.props.socket && this.state.userName && this.state.userLogin) {
            this.props.socket.send(
                JSON.stringify({
                    payload: 'login',
                    data: {
                        login: this.state.userLogin,
                        name: this.state.userName
                    }
                })
            );
        }
    };

    render() {
        return (
            <div id={styles.authWindow}>
                <h3> Авторизация </h3>
                <input type='text' id='userNameInput' value={this.state.userName} placeholder='ФИО' onChange={this.setName}/>
                <input type='text' id='userLoginInput' value={this.state.userLogin} placeholder='Ник' onChange={this.setLogin}/>
                <button id='loginButton' onClick={this.loginSend}><strong>Войти</strong></button>
            </div>
        )
    }
}

export default AuthWindow;