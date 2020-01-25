import React from 'react';


const Members = (props) => {
    const membersList = [];

    for (let user in props.members) {
        membersList.push(
            <li key={user}>
                {props.members[user].name}
            </li>
        )
    }

    return (
        <ul style = {{listStyleType: 'none'}}>
            {membersList}
        </ul>
    )
};

export default Members;