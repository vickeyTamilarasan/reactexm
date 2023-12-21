import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from './API';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
    const [view, setView] = useState([])
    const navi = useNavigate()

    function ok(event) {
        event.preventDefault();
        axios.post("http://localhost:1800/register", { name: name, regNo: number });
        alert("data saved!!")
        setName("")
        setNumber('')
        window.location.reload()
    }
    useEffect(() => {
        axios.get('http://localhost:1800/register').then((s) => {
            setView(s.data)
        })
    }, [])
    function del(q) {
        axios.delete(`${API}/${q}`).then(() => {
            axios.get('http://localhost:1800/register').then((s) => {
                setView(s.data)
            })
            alert("data deleted")
        })
    }

    function update(a, b, c) {
        localStorage.setItem("_id", a);
        localStorage.setItem("name", b);
        localStorage.setItem("regNo", c);
        navi('/edit')
    }
    return (
        <div>
            <h1 className='text-center'>CRUD</h1>
            <form onSubmit={ok}>
                <div className='row text-center'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-8 '>
                        <input className="form-control text-center mt-3 w-50" type='text' placeholder='enter ur name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input className="form-control text-center mt-3 w-50" type='text' placeholder='enter ur number' value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className='col-lg-4'></div>
                </div>
                <div className='text-center'>
                    <button className=" mt-3">Save</button>
                </div>
            </form>
            {/* <ul>
                {view.map((q)=>(
                    <li>
                        {q.userName},{q.userNumber}
                    </li>
                ))}
            </ul> */}

            <table className='table table-bordered container mt-3'>
                <tr>
                    <th className='text-center p-2'>User Name</th>
                    <th className='text-center p-2'>User Mobile Number</th>
                    <th className='text-center p-2'>Operations</th>
                </tr>
                {view.map((data) => (
                    <tr>
                        <td className='text-center p-1'>
                            {data.name}
                        </td>
                        <td className='text-center p-1'>
                            {data.regNo}
                        </td>

                        <td className='text-center p-1'>
                            <i className="fa-sharp fa-solid fa-trash fa-xl" style={{ color: "red", fontSize:"15px"}} onClick={() => del(data._id)}></i>
                            <i className="fa-sharp fa-solid fa-pen fa-xl" style={{ color: "red" , fontSize:"15px"}} onClick={() => update(data._id, data.name, data.regNo)}></i>
                        </td>
                    </tr>
                ))}

            </table>
        </div>
    )
}
