import React from 'react'

export default function EgProps(props) {
    let { dataValue } = props;
    return (
        <div>
            <li>
                <img src={dataValue[0].userImage} alt='Sample' />
            </li>
            <li>
                {dataValue[0].Name}
            </li>
            <li>
                {dataValue[0].Address}
            </li>
            <li>
                {dataValue[0].MobileNo}
            </li>
            <hr />
            <li>
                {dataValue[1].Name}
            </li>
            <li>
                {dataValue[1].Address}
            </li>
            <li>
                {dataValue[1].MobileNo}
            </li>
            <hr />
            <li>
                {dataValue[2].Name}
            </li>
            <li>
                {dataValue[2].Address}
            </li>
            <li>
                {dataValue[2].MobileNo}
            </li>
        </div>
    )
}

