import React, {Component, useState} from "react";

let Form = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const [passVerif, setPassVerif] = useState('');

    const checkPassword = (pass) => {
        if(pass==='lol') {
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(matchPass(formData.password)) {
            console.log(formData)
        } else {
            setPassVerif('Password is not correct!');
        }
    }

    const matchPass = (passW) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#])(?=.*[1-9]).{8,}$/
        return regex.test(passW);
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    return (
        <div>
            <h1>Hello this is a form!</h1>
            <form>
                <label>
                Name: 
                </label>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange}>
                    </input>
                    <label>
                        Email:
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}></input>
                    {passVerif}
            </form>
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Form;