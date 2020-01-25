import React from 'react';
import styles from './Message.module.css'
import classNames from "classnames";


const  Message = (props) => {

    const date = new Date(props.messageData.timestamp);
    let day, month, hours, minutes;
    day = date.getDate().toString();
    if (day.length < 2) {
        day = '0' + day;
    }
    month = (date.getMonth() +1).toString();
    if (month.length < 2) {
        month = '0' + month;
    }
    minutes = date.getMinutes().toString();
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    hours = date.getHours().toString();
    if (hours.length < 2) {
        hours = '0' + hours;
    }

    const checkAuthor = classNames(
        styles.message,
        {[styles.currentAuthor]: props.currentLogin === props.messageData.login}
    );

    return (
        <div className={checkAuthor}>
            {/*<img src={props.members.photo} className={styles.messagePhoto}/>*/}
            <div className={styles.messageDataContainer}>
                <div className={styles.messageMetaContainer}>
                    <div className={styles.messageAuthor}>
                        {props.users[props.messageData.login].name}
                    </div>
                    <div className={styles.messageDate}> {hours}:{minutes} {day}.{month} </div>
                </div>
                <div className={styles.messageText}>
                    {props.messageData.message}
                </div>
            </div>

        </div>
    )
};

export default Message;