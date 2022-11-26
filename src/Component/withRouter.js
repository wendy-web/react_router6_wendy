
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function withRouter(Component) {
    return function(props) {
        // 传递过去方法的使用
        const push = useNavigate(); // 跳转
        const match = useParams(); // 获取参数
        const location = useLocation(); // 获取当前路由
        return <Component {...props} history={{push, match, location}} />
    }
}