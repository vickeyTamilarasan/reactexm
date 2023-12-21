import './Example1.css'
import Picture from './images-icon.png'
export default function Example1() {
    // let person={name:'Tamilarasan',address:'erode'};
    let user = {
        userName: 'Tamil', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
        , userNumber: '9876543210'
    }
    return (
        <>
            <div className='position-relative'>
                <img className='ms-5' src={Picture} alt='Sample' />
                <h5 className="text-success ms-5">
                    {user.userName}  <br /> {user.userNumber}
                </h5>
                <button className='btn btn-primary rounded-5 ms-5'>Ok</button>
            </div>
        </>
    )
}