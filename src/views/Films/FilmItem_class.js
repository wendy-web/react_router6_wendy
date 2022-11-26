
import React, { Component } from 'react';
import withRouter from '../../Component/withRouter';

class FilmItemClass extends Component {
  gotoDetail = () => {
    console.log(this.props);
    this.props.history.push(`/detail2/${this.props.cinemaId}`)
  }
  render() {
    return(
      <div>
        FilmItem - {this.props.name}
        <button onClick={() => {
          this.gotoDetail()
        }}>click</button>
      </div>
    );
  }
}
// withRouter自我封装的高阶组件 - 具备路由的跳转形式
export default withRouter(FilmItemClass);
