import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
  return (
    <div>
        <p>Login页面 点击登录进入到Center页面</p>
        <button onClick={() => {
            localStorage.setItem('token', '991010');
            navigate('/center')
        }}>登录</button>
    </div>
  )
}
