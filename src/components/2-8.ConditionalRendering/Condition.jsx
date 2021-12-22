import React from 'react'

function UserGreeting(props){
    return <h1>{props.name}, welcome it's {props.count}</h1>;
}

function GuestGreeting(props){
    return <h1>Please Sign up.</h1>;
}

function Greeting(props) {
    // if(props.isLoggedIn){
    //     return <UserGreeting name="jimmy" count={0} />
    // }
    // return <GuestGreeting />;
    return props.isLoggedIn ? <UserGreeting name="jimmy" count={0} /> : <GuestGreeting />
}
export default function Condition() {
    const isLoggedIn = false;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}
