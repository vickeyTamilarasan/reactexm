import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { API } from '../Expence/API';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import './ExpenseItem.css'
export const DataCon = React.createContext()

function Reduce(state, action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        default:
            return state;
    }
}

export default function AddExpenseForm(props) {

    let [dataarr, setDataArr] = useState([]);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const initialState = {
        budget: 2000,
        expenses: [],
    };

    const [state, dispatch] = useReducer(Reduce, initialState)

    function Submit(e) {
        e.preventDefault();
        axios.post('https://65042b1cc8869921ae24a17b.mockapi.io/expenses-app',
            { expenseName: name, expenseCost: parseInt(cost) }).then(() => {
                axios.get('https://65042b1cc8869921ae24a17b.mockapi.io/expenses-app')
                    .then((s) => {
                        setDataArr(s.data);
                        initialState.expenses = s.data;
                        // dispatch({
                        //     type: 'ADD_EXPENSE',
                        //     payload: initialState.expenses,
                        // });

                        setName('');
                        setCost('');
                    })
            })

        // const expense = {
        //     id: dataarr.id,
        //     name: dataarr.expenseName,
        //     cost: parseInt(dataarr.expenseCost),
        // };


    }
    useEffect(() => {
        axios.get('https://65042b1cc8869921ae24a17b.mockapi.io/expenses-app').then((s) => {
            setDataArr(s.data)
            console.log(s.data);
            initialState.expenses = s.data;
            // dispatch({
            //     type: 'ADD_EXPENSE',
            //     payload: expenses,
            // });

            // setName('');
            // setCost('');
        })
    }, [])

    function Delete(a) {
        axios.delete(`${API}/${a}`).then(() => {
            axios.get('https://65042b1cc8869921ae24a17b.mockapi.io/expenses-app').then((s) => {
                setDataArr(s.data)
                initialState.expenses = s.data;
            })
            alert("data deleted")
        })
    }
    return (
        <div>

            <h3 className='mt-3 ms-3'>Add Expense</h3>

            <form >
                <div className='row '>
                    <div className='col-md-5 m-2'>
                        <div>
                            <label for='name'>Name</label>
                        </div>
                        <div >
                            <input className='form-control'
                                type='text'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className='col-md-5 m-2'>
                        <div>
                            <label for='cost'>Cost</label>
                        </div>
                        <div>
                            <input className='form-control'
                                type='text'
                                name='cost'
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                            ></input>
                        </div>
                    </div>

                </div>
                <div className='row ms-2'>
                    <div className='col-md'>
                        <button onClick={Submit} className='btn btn-primary mt-3'>
                            Save
                        </button>
                    </div>
                </div>
            </form>




            <h3 className='mt-3 ms-3'>Expenses</h3>

            <table className='table table-bordered  container'>

                {dataarr.map((data) => (
                    <tr>
                        <td>
                            {data.expenseName}
                        </td>
                        <td>
                            {data.expenseCost}
                        </td>
                        <td>
                            <DeleteForeverRoundedIcon id='delete' fontSize='large'
                                onClick={() => Delete(data.id)} />
                        </td>
                    </tr>
                ))}
            </table>
            <DataCon.Provider value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}>
                {props.children}
            </DataCon.Provider>
        </div>
    )
}
