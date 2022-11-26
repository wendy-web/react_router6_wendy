import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Detail() {
  const [searchParams, setsearchParams] = useSearchParams();
  // 获取参数
  console.log('获取参数:', searchParams.get('id'))
  // 判断参数是否存在
  console.log('判断参数是否存在:', searchParams.has('id'));
  // 可用set方法改变路由：
  return (
    <div>
      <p>Detail</p>
      <button onClick={() => {
        setsearchParams({id: 2})
      }}>猜你喜欢的detail，设置detail的id值</button>
    </div>
  )
}
