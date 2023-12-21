import  './Eg1.css'
export default function Eg1()
{
    function handleClick(){
        alert('You clicked me!');
    }
    return(
        <div className="container text-center mt-5">
            <div className = "row">
            <div className = "col">
            <button onClick={handleClick}>Login</button>
            </div>
            <div className = "col">
            <button>Login</button>
            </div>
            <div className = "col">
            <button >Login</button>
            </div>
            <div className = "col">
            <button >Login</button>
            </div>
            </div>
        </div>
    )
}
