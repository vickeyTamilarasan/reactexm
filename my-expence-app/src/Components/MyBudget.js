import React, { useContext } from 'react'
import { DataCon } from './AddExpenseForm'

export default function MyBudget() {

  const { budget } = useContext(DataCon);

  return (
    <div className='p-2'>
      <h6>Budget: £{budget}</h6>
      {/* <form onSubmit={save}>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Add Money'
              value={budget}
              onChange={(event) => setBudget(event.target.value)}/>
          </div>
          <div className='col'>
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
          </div>
        </div>

      </form> */}

    </div>
  )
}
