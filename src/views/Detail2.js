import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Detail2() {

  // 路由跳转方式二：
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.myid)
  return (
    <div>
      <p>Detail</p>
      <button onClick={() => {
        navigate('/detail2/2');
      }}>猜你喜欢的detail，设置/detail/的id值</button>
    </div>
  )
}
