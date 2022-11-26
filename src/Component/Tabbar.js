import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/tabbar.css'

export default function Tabbar() {
  return (
    <footer>
        <ul className='tabbar_box'>
            <li>
                <NavLink to='/film' className={({isActive}) => isActive ? 'tabbar_active': ''}>电影</NavLink>
            </li>
            <li>
                <NavLink to='/cinema' className={({isActive}) => isActive ? 'tabbar_active': ''}>影院</NavLink>
            </li>
            <li>
                <NavLink to='center' className={({isActive}) => isActive ? 'tabbar_active': ''}>我的</NavLink>
            </li>
        </ul>
    </footer>
  )
}
