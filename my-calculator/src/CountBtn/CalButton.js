import React, { useState } from 'react'
import './CalButton.css'

export default function CalButton() {
    let [set, countSet] = useState(0);
    function handleButtonClick(value) {
        if (value === "=") {
            const result = eval(set);
            countSet(result.toString());
        } else if (value === 'C') {
            countSet('');
        } else if (value === 'D') {
            countSet('');
        } else {
            countSet((prevExpression) => prevExpression + value);
        }

    }
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <input type='text' className='text-center' value={set} disabled></input>
                </div>
            </div>
            <hr />
            <div className='row g-0 ms-5 me-5'>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('C')}>Clear</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light  w-100' onClick={() => handleButtonClick('D')}>Delete</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100 h-100' onClick={() => handleButtonClick('%')}>%</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('/')}>/</button>
                </div>
            </div>
            <div className='row g-0 ms-5 me-5'>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('7')}>7</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('8')}>8</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100 h-100' onClick={() => handleButtonClick('9')}>9</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('*')}>*</button>
                </div>
            </div>

            <div className='row g-0 ms-5 me-5'>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('4')}>4</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('5')}>5</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100 h-100' onClick={() => handleButtonClick('6')}>6</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('-')}>-</button>
                </div>
            </div>

            <div className='row g-0 ms-5 me-5'>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('1')}>1</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('2')}>2</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100 h-100' onClick={() => handleButtonClick('3')}>3</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('+')}>+</button>
                </div>
            </div>
            <div className='row g-0 ms-5 me-5'>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('')}></button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100' onClick={() => handleButtonClick('0')}>0</button>
                </div>
                <div className='col-md-3'>
                    <button className='p-2 border-light w-100 h-100' onClick={() => handleButtonClick('.')}>.</button>
                </div>
                <div className='col-md-3'>
                    <button id='btnSubmit' className='p-2 border-success w-100' onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </div>
    )
}
