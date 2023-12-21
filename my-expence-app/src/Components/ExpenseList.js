import React from 'react'

export default function ExpenseList() {
  const expenses = [
    { id: 0, name: 'shopping', cost: 40 },
    { id: 1, name: 'holiday', cost: 400 },
    { id: 2, name: 'car service', cost: 50 },
  ];

  return (
    <div>
      {/* <ul>
            {expenses.map((expense) => (
              
            <ExpenseItem id={expense.id} name={expense.expenseName} cost={expense.expenseCost} />  
            ))}
        </ul> */}

      <table>
        {expenses.map((expense) => (
          <tr>
            <td>
              {expense.id}
            </td>
            <td>
              {expense.name}
            </td>
            <td>
              {expense.cost}
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}
