import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from './API';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
    const [id, setId] = useState(0)
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const navi = useNavigate();
    function ok(e) {
        e.preventDefault();
        axios.put(`${API}/${id}`, { name: name, regNo: number });
        alert("data updated!!!")
        navi('/create')
    }
    useEffect(() => {
        setId(localStorage.getItem("_id"));
        setName(localStorage.getItem("name"));
        setNumber(localStorage.getItem("regNo"));
    }, [])
    return (
        <div>
            <h1>Update Data here</h1>
            <form onSubmit={ok}>
                <input type='text' placeholder='enter ur name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='enter ur number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button>Save</button>
            </form>
        </div>
    )
}
