import React from 'react'
import EgPro from './EgPro'

export default function Pro() {
    let obj={name:'Tamil',pincode:638001,address:'erode',family:{father:'-',mother:'-'}}
    function ok()
    {
      document.title=`Changed title`
    }
  return (
    <div>
        <EgPro person={obj}/>

        <button onClick={ok}>Ok</button>
    </div>
  )
}
