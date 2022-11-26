// hash路由模式：带#
import { HashRouter as Router } from 'react-router-dom';
// history模式：不带# 需要后端的配置
// import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Tabbar from './Component/Tabbar';
import MRouter from './router';

function App() {
  return (
    <Router>
      <MRouter></MRouter>
      <Tabbar></Tabbar>
    </Router>
  );
}

export default App;
