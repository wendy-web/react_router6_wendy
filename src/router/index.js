import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Film from '../views/Film';
import Cinema from '../views/Cinema';
import Center from '../views/Center';
import NotFound from '../views/NotFound';

export default function MRouter() {
  return (
    <Routes>
        {/* <Route path='/' element={<Film></Film>} /> */}
        {/* index的默认路由 */}
        {/* <Route index element={<Film></Film>} /> */}
        <Route path='/film' element={<Film></Film>} />
        <Route path='/cinema' element={<Cinema></Cinema>} />
        <Route path='/center' element={<Center></Center>} />

        {/* 路由重定向的使用 */}
        {/* 方式一： */}
        {/* <Route path='*' element={<Navigate to='/film' />} /> */}
        {/* 方式二： */}
        <Route path='/' element={<Redirect to='/film'></Redirect>} />
        <Route path='*' element={<NotFound to='/notFound'></NotFound>} />

    </Routes>
  )
}

function Redirect({to}) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to, {replace: true})
    }, []);
    return null;
}
