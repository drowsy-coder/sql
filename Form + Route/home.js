import React, {Component, useState} from "react";

const Home = () => {
    const [userName, setUserName] = useState('Ramesh');

    const changeName = (uName) => {
        setUserName(uName);
    }

    return (
        <div>
            <h1>Hello Everyone !!!</h1>
            <h3>My name is {userName}!</h3>
            <button onClick={() => changeName("Amritansh")}>
            Amritansh
            </button>
            <button onClick={() => changeName("Ramesh")}>
            Ramesh
            </button>
        </div>
    );
}

export default Home;