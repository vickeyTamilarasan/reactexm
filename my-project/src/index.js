import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainHome from './Browser/MainHome';
import ReduceCount from './usereducer/ReduceCount';
import UseRefHook from './useref/UseRefHook';
import UseMemoHook from './useMemo/UseMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainHome></MainHome>
    {/* <ReduceCount></ReduceCount> */}
    {/* <UseRefHook/> */}
    {/* <UseMemoHook /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
