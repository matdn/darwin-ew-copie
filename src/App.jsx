import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Menu from './components/menu';
import Cursor from './components/cursor';
import About from './components/about';
import Bande from './components/bande';
import Tech from './components/tech';
import SpinningText from './components/spinningText';
import { useEffect } from 'react';
function App() {
    useEffect(()=> {
    
  });
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Menu/>
      <Cursor/>
      <About/>
      {/* <Tech/> */}
      <SpinningText/>
      <Bande/>
    </div>
    
  );
}

export default App;
