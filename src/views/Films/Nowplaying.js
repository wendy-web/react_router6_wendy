import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nowplaying() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    // 访问电影的接口
  //   axios({
  //     url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3293746',
  //     method: 'get',
  //     headers: {
  //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
  //       'X-Host': 'mall.film-ticket.cinema.list'
  //     }
  //   }).then((res) => {
  //     console.log(res);
  //     setlist(res.data.data.cinemas)
  //   })
    setlist([{name:'深圳地区', cinemaId:0}])
  }, []);
  const navigate = useNavigate();
  const gotoDetail = (id) =>{
    navigate(`/detail?id=${id}`);
  }
  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key={item.cinemaId} onClick={() => {
            gotoDetail(item.cinemaId)
          }}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
