import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Film() {
  return (
    <div>
      <div style={{background:'gray', height: '200px'}}>轮播图</div>
      {/* 嵌套路由的匹配 */}
      <Outlet></Outlet>
    </div>
  )
}
