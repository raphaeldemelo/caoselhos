import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Conselhos from '../Pages/Conselhos';

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/conselhos' element={<Conselhos />} />
            </Routes>
        </BrowserRouter>
    );
}