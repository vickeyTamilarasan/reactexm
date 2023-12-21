import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    return (
        <div className='container'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                {props.name}
                <div>
                    <span className='mr-3'>
                        £{props.cost}
                    </span>
                    <DeleteForeverRoundedIcon id='delete' />
                    
                </div>
            </li>
        </div>
    )
}
