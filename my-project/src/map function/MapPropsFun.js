import React from 'react'

export default function MapPropsFun(props) {
    let { colData } = props;
    return (
        <div>
            <ol>
                {colData.map((q, sIndex) => (
                    <li key={sIndex}>
                        {q}
                        {/* <br/>
                        {q.MobileNo}
                        <br/>
                        {q.Address} */}
                    </li>
                ))}
            </ol>
        </div>
    )
}
