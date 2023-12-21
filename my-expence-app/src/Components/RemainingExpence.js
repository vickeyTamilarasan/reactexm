import React, { useContext } from 'react'
import { DataCon } from './AddExpenseForm'

export default function RemainingExpence() {

  const { expenses, budget } = useContext(DataCon)
  const totalExpense = expenses.reduce((total, item) =>
    total = total + item.expenseCost, 0);

  const remainingExpense = budget - totalExpense;
  return (
    <div className='p-2'>
      <h6>Remaining: £{remainingExpense}</h6>
    </div>
  )
}
