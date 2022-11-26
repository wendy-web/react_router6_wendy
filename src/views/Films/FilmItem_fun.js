import React from 'react'
import { useNavigate } from 'react-router-dom';
function FilmItemFun(props) {
    const navigate = useNavigate();
    const gotoDetail = () => {
        navigate(`/detail2/${props.cinemaId}`);
    }
  return (
    <div>
        FilmItem - {props.name}
        <button onClick={() => {
            gotoDetail()
        }}>click</button>
    </div>
  )
}
export default FilmItemFun;
