import React, { useContext } from 'react'
import { a } from './MainContext'

export default function File2() {
    const b = useContext(a);
    return (
        <div>
            <ol>
                {b.map((q) => (
                    <li>
                        {q.Name}
                        {q.middleName}
                        {q.lastName}
                    </li>
                ))}
            </ol>
        </div>
    )
}
