import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
    const navi = useNavigate();
    function Register() {
        navi('/registerForm')
    }
    let [name, setEmail] = useState('');
    let [password, setPassword] = useState('');
    // var emailPatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const login = async () => {
        try {
            await axios.post("http://localhost:4000/login", { name : name, password : password });
            alert('Login SuccessFull')
            setEmail('');
            setPassword('');
        } catch (error) {
            alert("Invalid User");
        }
        // if (email === "") {
        //     alert("Please enter your email");
        // } else if (!emailPatter.test(email)) {
        //     alert("You have entered an invalid email address!")
        // } else if (password === "") {
        //     alert("Please enter your Password");
        // } else if (!passwordPattern.test(password)) {
        //     alert("password should contain atleast one number and one special character");
        // } else if (password.length < 8) {
        //     alert("Password should contains atleast 8 char");
        // } else {
            

        // }

    }
    return (
        <div>
            <form className='text-center'>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-8 '>
                        <input type="text" value={name} onChange={(e) => setEmail(e.target.value)} placeholder="ENTER YOUR NAME" className="form-control text-center mt-5 w-50" />

                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="PASSWORD" className="form-control text-center mt-3 w-50" />
                    </div>
                    <div className='col-lg-4'></div>
                </div>
                <div>
                    <button className=" mt-5 me-2" onClick={login}>Login</button>

                    <button className=" mt-5 ms-3" onClick={Register}>Register</button>
                </div>
            </form>
        </div>
    )
}
