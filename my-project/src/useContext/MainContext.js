import React, { useState } from 'react'
import File1 from './File1'
export const a = React.createContext([{}])

export default function MainContext() {
    // let obj = {name:'TamilArasan',UserName:'Tamil'}
    let [name, setName] = useState('');
    let [Middlename, setMiddleName] = useState('');
    let [Lastname, setLastName] = useState('');
    let [view, setView] = useState([]);
    let [obj, setObj] = useState({});
    function Click(event) {
        event.preventDefault();
        setObj({ Name: { name }, middleName: { Middlename }, lastName: { Lastname } })
        setView([...view, obj]);
        setName('');
        setMiddleName('');
        setLastName('');
    }
    return (
        <div>
            <a.Provider value={view}>
                <File1 />
            </a.Provider>
            <form onSubmit={Click}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' value={Middlename} onChange={(e) => setMiddleName(e.target.value)} />
                <input type='text' value={Lastname} onChange={(e) => setLastName(e.target.value)} />
                <input type='submit' />
            </form>
        </div>
    )
}
