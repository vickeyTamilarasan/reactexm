import React, { useState } from 'react'
import FormDataCheck from './FormDataCheck';

export default function FormData() {
    let [data, setdata] = useState('');
    let [updated, setUpdated] = useState(data);
    let [dataNumber, setdataNumber] = useState('');
    let [updatedNumber, setUpdatedNumber] = useState(dataNumber);
    // function DataCollect(event) {
    //     setdata(event.target.value);
    //     setdataNumber(event.target.value);
    // }
    function DataUpdate(e) {
        e.preventDefault();
        console.log(data);
        console.log(dataNumber);
        setUpdated(data);
        setUpdatedNumber(dataNumber);
        setdata('');
        setdataNumber('');
    }
    return (
        <div>
            <h1 className='text-center'>
                {data}
                {dataNumber}
            </h1>

            <hr />

            <form className='text-center'>
                <div className='mt-3'>
                    <input type='text' name='name' value={data} placeholder='UserName' onChange={(e)=> setdata(e.target.value)} />
                </div>
                <div className='mt-2'>
                    <input type='text' name='number' value={dataNumber} placeholder='UserNumber' onChange={(e) => setdataNumber(e.target.value)} />
                </div>
                <button className='mt-2' onClick={DataUpdate}>Send</button>
            </form>

            <FormDataCheck userName = {updated} userNumber = {updatedNumber} />
        </div>
    )
}
