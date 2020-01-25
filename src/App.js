import React from 'react';
import './App.css';
import StartWindow from "./components/StartWindow";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                socket: null,
                logged: false,
                data: {},
                users: {},
                membersList: [],
                currentLogin: '',
                currentUser: null,
            };

        this.onLogin = this.onLogin.bind(this);
        this.UpdateMembers = this.UpdateMembers.bind(this);
        this.UpdateMessages = this.UpdateMessages.bind(this);

    };

    socket = new WebSocket('ws://localhost:8081');

    componentDidMount() {

        this.socket.onopen = () => {
            this.setState({socket: this.socket});
            console.log('connected');
        };

        this.socket.onclose = (event) => {
            if (event.wasClean) {
                alert('Соединение закрыто чисто');
            } else {
                alert('Обрыв соединения'); // например, "убит" процесс сервера
            }
        };

        this.socket.onerror = (error) => {
            alert('Ошибка ' + error.message);
            this.socket.close();
        };

        this.socket.onmessage = (event) => {
            const result = JSON.parse(event.data);

            if (result.error) {
                alert('ERROR: [' + result.payload + '] ' + result.error);

            } else {
                switch (result.payload) {
                    case 'login':
                        this.onLogin(result.data);
                        break;
                    case 'newMember':
                        this.UpdateMembers(result.data);
                        this.UpdateMessages();
                        break;
                    case 'memberLeft':
                        this.UpdateMembers(result.data);
                        break;
                    case 'sendMessage':
                        this.UpdateMessages(result.data);
                        break;
                    case 'newMessage':
                        this.UpdateMessages(result.data);
                        break;
                    default:
                        throw new Error('Unknown method');
                }
            }
        }
    };

    onLogin(data) {
        this.setState({
            logged:true,
            currentLogin: data.currentLogin,
            users: data.users,
            members: data.members,
            messages: data.messages
        })
    };

    UpdateMembers(data) {
        this.setState({
            members: data.members
        })
    };

    UpdateMessages(data) {
        let allMessages = this.state.messages;
        allMessages.push(data);
        this.setState({
            messages: allMessages
        })
    };

    render () {
        return <StartWindow appState = {this.state}/>
    }
}

export default App;
