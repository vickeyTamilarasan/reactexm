// import axios from 'axios';
// import React, { createContext, useEffect, useReducer, useState } from 'react'




// export const AppContext = createContext();

// export const AppProvider = (props) => {
//     const [view, setView] = useState([])
//     useEffect(() => {
//         axios.get('https://65042b1cc8869921ae24a17b.mockapi.io/expenses-app').then((s) => {
//             setView(s.data)
//         })
//         console.log(view);
//     },[])

//     const initialState = {
//         budget: 2000,
//         expenses: [

//             { id: 12, name: 'shopping', cost: 40 },
//             { id: 13, name: 'holiday', cost: 400 },
//             { id: 14, name: 'car service', cost: 50 },
//         ],
//     };

//     const AppReducer = (state, action) => {
//         switch (action.type) {
//             case 'ADD_EXPENSE':
//                 return {
//                     ...state,
//                     expenses: [...state.expenses, action.payload]
//                 };

//             default:
//                 return state;
//         }
//     };

//     const [state, dispatch] = useReducer(AppReducer, initialState);
//     return (
//         <div>
//             <AppContext.Provider value={{
//                 budget: state.budget,
//                 expenses: state.expenses,
//                 dispatch
//             }}
//             >
//                 {props.children}
//             </AppContext.Provider>
//         </div>
//     )
// }
