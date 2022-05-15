import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from '../Pages/Home';

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}