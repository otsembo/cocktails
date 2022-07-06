import '../../styles/App.css';
import Header from "../header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from '../home/Home'
import Drinks from '../drinks/Drinks';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route  path='/' element={<Home/>}></Route>
            <Route  path='/alcoholic' element={<Drinks  title={'Alcoholic Drinks'} icon={'local_bar'} key={'alcoholic-route'}/>}></Route>
            <Route  path='/bevarages' element={<Drinks  title={'Beverages'} icon={'local_bar'} key={'beverage-route'}/>}></Route>
            <Route  path='/juice' element={<Drinks  title={'Fruit Juice'} icon={'local_bar'} key={'juice-route'}/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;