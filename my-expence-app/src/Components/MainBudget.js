import React from 'react'
import MyBudget from './MyBudget'
import RemainingExpence from './RemainingExpence'
import SpendExpence from './SpendExpence'
import AddExpenseForm from './AddExpenseForm'

export default function MainBudget() {
    return (
        <AddExpenseForm>
            <div>
                <h1 className='text-dark ms-3'>
                    My Budget Planner
                </h1>
                <div className='container'>
                    <div className='row mt-3 ms-3'>
                        <div className='col-sm m-1 p-3
                     bg-primary rounded'>
                            <MyBudget />
                        </div>
                        <div className='col-sm m-1 p-3 bg-success rounded'>
                            <RemainingExpence />
                        </div>
                        <div className='col-sm m-1 p-3 bg-info rounded'>
                            <SpendExpence />
                        </div>
                    </div>
                </div>

                {/* <div className='row mt-3'>
                    <div className='col-sm'>
                        <AddExpenseForm />
                    </div>
                </div> */}

            </div>
        </AddExpenseForm>
    )
}
