import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
    let [num,setnum] = useState(0);

    function hook(){
        return num*123456789;
    }

    let valu = useMemo(hook,[num]);
  return (
    <div>
        <h1>
        {num}
        </h1>
        <button onClick={() => setnum(num+1)}>Multiply</button>

        
        {valu}
    </div>
  )
}
