import React, { useEffect, useState } from 'react'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import '../Components/Createcon.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from './API';

export default function EditContacts() {
    const [id, setId] = useState(0);
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [jobTiltle, setJobtitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [notes, setNotes] = useState('');
    const navi = useNavigate();

    function update(event) {
        event.preventDefault();
        axios.put(`${API}/${id}`,
            {
                userName: firstName + lastName,
                userCompany: company,
                userJobTitle: jobTiltle,
                userEmail: email,
                userNumber: phone,
                userBirthday: birthday,
                userNotes: notes
            });
        navi('/')
    }

    useEffect(() => {
        setId(localStorage.getItem("_id"));
        setFirstname(localStorage.getItem("name"));
        setPhone(localStorage.getItem("phoneNo"))
    })
    return (
        <div className='mt-5'>
            <div className='row container'>
                <div className='col-9'>

                </div>
                <div className='col-3'>
                    <button onClick={update} className='btn btn-primary w-50'>
                        Save
                    </button>
                </div>
            </div>
            <hr />
            <div className='row container mt-5'>
                <div className='col-3'>

                </div>
                <div className='col-9'>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>
                            <PersonOutlineIcon className='mt-3' id='createicon' />
                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="text" className="form-control"
                                id="floatingInput"
                                value={firstName}
                                onChange={(e) => setFirstname(e.target.value)} />
                            <label className='ms-3' for="floatingInput">First name</label>
                        </div>
                    </div>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>

                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="text" className="form-control"
                                id="floatingInput"
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)} />
                            <label className='ms-3' for="floatingInput">Last name</label>
                        </div>
                    </div>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>
                            <CorporateFareIcon className='mt-3' id='createicon' />
                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="text" className="form-control"
                                id="floatingInput"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)} />
                            <label className='ms-3' for="floatingInput">Company</label>
                        </div>
                    </div>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>

                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="text" className="form-control"
                                id="floatingInput"
                                value={jobTiltle}
                                onChange={(e) => setJobtitle(e.target.value)} />
                            <label className='ms-3' for="floatingInput">Job title</label>
                        </div>
                    </div>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>
                            <EmailOutlinedIcon className='mt-3' id='createicon' />
                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="email" className="form-control"
                                id="floatingInput"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label className='ms-3' for="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>
                            <PhoneIcon className='mt-3' id='createicon' />
                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="text" className="form-control"
                                id="floatingInput"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                            <label className='ms-3' for="floatingInput">Phone</label>
                        </div>
                    </div>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>
                            <CakeIcon className='mt-3' id='createicon' />
                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="text" className="form-control"
                                id="floatingInput"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)} />
                            <label className='ms-3' for="floatingInput">BirthDay</label>
                        </div>
                    </div>
                    <div className='row container'>
                        <div className='col-md-3 text-end'>
                            <NoteOutlinedIcon className='mt-3' id='createicon' />
                        </div>
                        <div class="col-md-9 form-floating mb-3">
                            <input type="text" className="form-control"
                                id="floatingInput"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)} />
                            <label className='ms-3' for="floatingInput">Notes</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
