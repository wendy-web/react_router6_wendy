import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FilmItemFun from './FilmItem_fun';
import FilmItemClass from './FilmItem_class';

export default function Nowplaying() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    // 访问电影的接口
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3293746',
    //   method: 'get',
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then((res) => {
    //   console.log(res);
    //   setlist(res.data.data.cinemas)
    // })
    setlist([{name:'深圳地区0', cinemaId:0},{name:'深圳地区1', cinemaId:1}])
  }, []);
  const navigate = useNavigate();
  const gotoDetail1 = (id) => {
    // 路由的跳转方式一：/detai?id=0
    navigate(`/detail1?id=${id}`);
  }
  const gotoDetail2 = (id) => {
    // 路由的跳转方式二：detail/0,路由需要配置detail/:myid=0
    navigate(`/detail2/${id}`);
  }
  return (
    <div>
      <ul>
         <li>
            点击跳转到detail - URLSearch的跳转：/detail1?id=0
            <button onClick={() => gotoDetail1(0)}>click</button>
          </li>
          <li onClick={() => {
            gotoDetail2(0)
          }}>
            点击跳转到detail - URLSearch的跳转：/detail1?id=0
            <button onClick={() => gotoDetail2(0)}>click</button>
          </li>
          <FilmItemFun name='filmItem的function的组件，点击进入' cinemaId='1'></FilmItemFun>
          <FilmItemClass name='filmItem的class的组件，点击进入' cinemaId='2'></FilmItemClass>
          {list.map((item) => <FilmItemFun key={item.cinemaId} {...item}></FilmItemFun>)}
      </ul>
    </div>
  )
}
