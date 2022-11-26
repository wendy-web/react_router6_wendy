import { HashRouter } from 'react-router-dom';
import './App.css';
import Tabbar from './Component/Tabbar';
import MRouter from './router';

function App() {
  return (
    <HashRouter>
      <MRouter></MRouter>
      <Tabbar></Tabbar>
    </HashRouter>
  );
}

export default App;
