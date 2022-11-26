import React, { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

export default function MRouter() {
  const element = useRoutes([
    {
      path: '/film',
      element: lazyload('Film'),
      children: [
        {
          path: '',
          element: <Redirect to='/film/nowplaying' />,
        },
        {
          path: 'nowplaying',
          element: lazyload('Films/Nowplaying')
        },
        {
          path: 'comingsoon',
          element: lazyload('Films/Comingsoon')
        }
      ]
    },
    {
      path: '/detail1',
      element: lazyload('Detail1')
    },
    {
      path: '/detail2/:myid',
      element: lazyload('Detail2')
    },
    {
      path: '/cinema',
      element: lazyload('Cinema')
    },
    {
      path: '/cinema/search',
      element: lazyload('Search')
    },
    {
      path: '/center',
      element: <AuthComponent>
                {/* <Center></Center> */}
                {lazyload('Center')}
              </AuthComponent>
    },
    {
      path: '/login',
      element: lazyload('Login')
    },
    {
      path: '/',
      element: <Redirect to='/film' />
    },
    {
      path: '*',
      element: lazyload('NotFound')
    }
  ]);
  return (
    element
  )
}

function Redirect({to}) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to, {replace: true})
    }, []);
    return null;
}
// 自定义是否已登录的组件 - 路由拦截组件的封装
function AuthComponent({children}) {
  // 组件中嵌套的子组件 children
  const isLogin = localStorage.getItem('token');
  return isLogin ? children :<Redirect to='/login' />
}

// 懒加载的封装
const lazyload = (path) => {
  const Comp = React.lazy(() => import(`../views/${path}`));
  return (
    <React.Suspense fallback={<>加载中....</>}>
      <Comp />
    </React.Suspense>
  )
}