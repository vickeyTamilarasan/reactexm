import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Eg1 from './Components/Eg1'
import Eg2 from './Components/Eg2'
import Eg3 from './Components/Eg3'
import Eg4 from './Components/Eg4'
import Example1 from './Dynamic/Example1'
import Pro from './props/Pro'
import Propers from './props/Propers'
import Use from './usestate/Use'
import UseStateCount from './usestate/UseStateCount'
import Form from './usestate/forms/Form'
import FormData from './usestate/forms/FormData'
import MapFunction from './map function/MapFunction'
import MainContext from './useContext/MainContext'
export default function App()
{
  return(
    <div>
      <h1 className="text-center">
        Hello
      </h1>
      <Eg1/>
      <Eg2/>
      <Eg3/>
      <Eg4/>

      <hr/>

      <Example1/>

      <h1>PROPS</h1>
      <Pro/>

      <hr/>

      <h1>EgProps</h1>
      <Propers/>

      <hr/>
      <h1>Usestate</h1>
      <Use/>
      <UseStateCount/>

      <h1>UseState using Forms</h1>
      <Form/>

      <hr/>
      <FormData/>

      <hr/>
      <MapFunction/>

      <hr/>
      <h1>
        Use Context are in comments
      </h1>
      {/* <MainContext/> */}
    </div>
  )
}