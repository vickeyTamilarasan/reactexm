import React, { useState } from 'react'
import MapPropsFun from './MapPropsFun'
import { useNavigate } from 'react-router-dom';

export default function MapFunction() {
    // let a = [1, "2,", true, "erode", "tamilnadu", "chennai"]
    let [data, setdata] = useState([1, "2,", true, "erode", "tamilnadu", "chennai"])
    let [updated, setUpdated] = useState('');
    function DataUpdate(e) {
        e.preventDefault();
        const copyCart = [data];
        copyCart.push(updated);
        setdata(copyCart);
        setUpdated("");
    }
    const navi=useNavigate();
    // let dataObject = [{
    //     Name: 'Tamilarasan', MobileNo: '9876541230',
    //     Address: 'Erode', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
    // },
    // {
    //     Name: 'Yugesh', MobileNo: '9445632107',
    //     Address: 'Coimbatore', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
    // },
    // {
    //     Name: 'Ramachandran', MobileNo: '8745123690',
    //     Address: 'Salem', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
    // },
    // {
    //     Name: 'Vignesh', MobileNo: '1234567890',
    //     Address: 'chennai', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
    // }]
    function form()
    {
        navi('/formReact')
        document.title="Next page"

    }
    return (
        <div>
            <form>
                <div className='mt-3'>
                    <input type='text' value={updated} placeholder='UserName'  onChange={(e) => setUpdated(e.target.value)} />
                </div>
                <button className='mt-2' onClick={DataUpdate}>Send</button>
            </form>
            <MapPropsFun colData={data} />
            {/* <ul>
            {a.map((q)=>(
                <li>
                    {q}
                </li>
            ))}
        </ul> */}

        <button onClick={form}>Go to forms</button>
        </div>
    )
}
