import React from 'react';
import { Route, Routes } from 'react-router-dom';
import File from '../views/File';
import Cinema from '../views/Cinema';
import Center from '../views/Center';

export default function MRouter() {
  return (
    <Routes>
        <Route path='/' element={<File></File>} />
        <Route path='/film' element={<File></File>} />
        <Route path='/cinema' element={<Cinema></Cinema>} />
        <Route path='/center' element={<Center></Center>} />
    </Routes>
  )
}
