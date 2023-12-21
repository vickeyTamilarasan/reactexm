import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainBudget from '../Components/MainBudget'

export default function MainExpencePage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainBudget />} path='/' />
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}
