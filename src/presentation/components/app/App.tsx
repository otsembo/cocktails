import '../../styles/App.css';
import Header from "../header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route  path='/' element={<Home/>}></Route>
            <Route  path='/alcoholic' element={<Home/>}></Route>
            <Route  path='/bevarages' element={<Home/>}></Route>
            <Route  path='/juice' element={<Home/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;