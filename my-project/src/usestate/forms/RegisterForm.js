import React from 'react'

export default function RegisterForm() {
    function registerForm() {

    }
    return (
        <div>
            <form className='text-center'>
                <div id='container' className='row'>
                    <div className='col-lg-3'></div>
                    <div id='animate' className='col-lg-6'>
                        <input type="email" placeholder="ENTER YOUR EMAIL" className="form-control text-center mt-5" />

                        <input type="text" placeholder="ENTER YOUR FIRSTNAME" className="form-control text-center mt-3" />

                        <input type="text" placeholder="ENTER YOUR LASTNAME" className="form-control text-center mt-3" />

                        <input type="date" placeholder="ENTER YOUR DATEOFBIRTH" className="form-control text-center mt-3" />

                        <input type="password" placeholder="ENTER YOUR PASSWORD" className="form-control text-center mt-3" />

                        <input type="password" placeholder="CONFIRM YOUR PASSWORD" className="form-control text-center mt-3" />

                        <button className=" mt-5 me-2" onClick={registerForm}>Register</button>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </form>
        </div>
    )
}
