
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ContactApi } from '../components/ContactApi';
const Update = () => {
    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [company, setCompany] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const [dateofbirth, setDateofBirth] = useState('');
    const [id, setId] = useState('');

    let navi = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem('_id'));
        setUsername(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
        setCompany(localStorage.getItem("company"));
        setJobtitle(localStorage.getItem("jobtitle"));
        setPhoneNo(localStorage.getItem("phoneNo"));
        setDateofBirth(localStorage.getItem("dateofbirth"));
    })
    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.put(`${ContactApi}/${id}`,
    //             {
    //                 name: name,
    //                 email: email,
    //                 password: password,
    //                 company: company,
    //                 jobtitle: jobtitle,
    //                 phoneNo: phoneNo,
    //                 dateofbirth: dateofbirth

    //             }).then((s) => {
    //                 console.log(s.data);
    //             });
    //         alert('Profile Update successful');
    //         // navi('/login')
    //     } catch (error) {
    //         alert('Error registering user');
    //     }
    // };

    function handleUpdate(e) {
        e.preventDefault();
        axios.put(`${ContactApi}/${id}`,
            {
                name: name,
                email: email,
                password: password,
                company: company,
                jobtitle: jobtitle,
                phoneNo: phoneNo,
                dateofbirth: dateofbirth

            }).then((s) => {
                console.log(s.data);
            });
        alert('Profile Update successful');
        // navi('/login')
    }

    return (
        <div>
            <h2>Profile Update</h2>

            <div className='container'>
                <div className='d-block mt-3'>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={name}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='d-block mt-3'>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='d-block mt-3'>
                    <input
                        className="form-control"
                        type="password"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='d-block mt-3'>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div className='d-block mt-3'>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={jobtitle}
                        onChange={(e) => setJobtitle(e.target.value)}
                    />
                </div>
                <div className='d-block mt-3'>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                    />
                </div>
                <div className='d-block mt-3'>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={dateofbirth}
                        onChange={(e) => setDateofBirth(e.target.value)}
                    />
                </div>
                <button onClick={handleUpdate} className='btn btn-primary mt-3 w-50'>Update</button>
            </div>
        </div>
    );
};

export default Update;
