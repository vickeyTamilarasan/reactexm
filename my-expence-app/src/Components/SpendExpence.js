import React, { useContext } from 'react'
import { DataCon } from './AddExpenseForm'

export default function SpendExpence() {

  const { expenses } = useContext(DataCon);
  const totalExpense = expenses.reduce((total, item) => 
  total = total + item.expenseCost ,0);
  
  console.log(expenses);
  return (
    <div className='p-2'>
      <h6>Spent so far: £{totalExpense}</h6>
    </div>
  )
}
