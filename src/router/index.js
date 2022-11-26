import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Film from '../views/Film';
import Cinema from '../views/Cinema';
import Center from '../views/Center';
import NotFound from '../views/NotFound';
import Search from '../views/Search';
import Nowplaying from '../views/Films/Nowplaying';
import Comingsoon from '../views/Films/Comingsoon';

import Detail1 from '../views/Detail1';
import Detail2 from '../views/Detail2';


export default function MRouter() {
  return (
    <Routes>
        {/* <Route path='/' element={<Film></Film>} /> */}
        {/* index的默认路由 */}
        {/* <Route index element={<Film></Film>} /> */}
        <Route path='/film' element={<Film></Film>}>
            <Route path='' element={ <Redirect to='/film/nowplaying' />} />
            <Route path='nowplaying' element={<Nowplaying></Nowplaying>} />
            <Route path='comingsoon' element={<Comingsoon></Comingsoon>} />
        </Route>
        {/* 路由的跳转方式一： */}
        {/* 路由URLSearch的使用：detail?id=0 */}
        <Route path='/detail1' element={<Detail1></Detail1>} />

        {/* 路由的跳转方式二： */}
        {/* 动态路由 */}
        <Route path='/detail2/:myid' element={<Detail2></Detail2>} />

        <Route path='/cinema' element={<Cinema></Cinema>} />
        <Route path='/cinema/search' element={<Search></Search>} />
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
