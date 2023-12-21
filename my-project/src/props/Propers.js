import React from 'react'
import EgProps from './EgProps'

export default function Propers() {
    let dataObject = [{
        Name: 'Tamilarasan', MobileNo: '9876541230',
        Address: 'Erode', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
    },
    {
        Name: 'Yugesh', MobileNo: '9445632107',
        Address: 'Coimbatore', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
    },
    {
        Name: 'Ramachandran', MobileNo: '8745123690',
        Address: 'Salem', userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d_-EsmSH5uXGsa1TJean_0YpsJ7PCBgq8px6xq_L9a8QQeu24gztXo-SpnrRIB6sJuw&usqp=CAU'
    }]
    return (
        <div>
            <EgProps dataValue={dataObject} />
        </div>
    )
}

