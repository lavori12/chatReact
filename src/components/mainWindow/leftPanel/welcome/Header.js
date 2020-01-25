import React from 'react';
import Members from "./members/Members";

const  Header = (props) => {

    return (
        <div>
            <div className='headers'>
                <span>Участники</span>
                (<span id='counter'>{Object.keys(props.members).length}</span>)
            </div>
            <Members members={props.members}/>
        </div>
    )
};

export default Header;