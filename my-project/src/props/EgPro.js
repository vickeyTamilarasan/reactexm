import React from 'react'

export default function EgPro(props) {
    let {person}=props;
  return (
    <div>
        <li>
            {person.name}
            {person.family.father}
        </li>
    </div>
  )
}
