import React, { useState } from 'react'

export default function UseStateCount() {
    let [set, countNo] = useState(0);
    function Add() {
        countNo(set + 1);
    }
    function Subtract() {
        countNo(set - 1);
    }
    function Resets() {
        countNo(0);
    }
    let [ImageSet, ImageDel] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU');
    function DeleteImages() {
        if (ImageSet === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU') {
            ImageDel(0);
        } else if (ImageSet === 0) {
            ImageDel('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU');
        }

    }
    return (
        <div>
            <div className='row text-center'>
                <div>
                    <h1 className='col'>
                        {set}
                    </h1>
                </div>
            </div>
            <div className='row text-center mt-5'>
                <div className='col'>
                    <button onClick={Add}>Add Count</button>
                </div>
                <div className='col'>
                    <button onClick={Subtract}>Minus Count</button>
                </div>
                <div className='col'>
                    <button onClick={Resets}>Reset</button>
                </div>
            </div>
            <hr />

            <img src={ImageSet} alt='sample' />

            <div className='p-relative ms-5 mt-5'>
                <button onClick={DeleteImages}>Delete Image</button>
            </div>
        </div>
    )
}
