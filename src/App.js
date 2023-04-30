import logo from './logo.svg';
import './App.css';
import Lib from './lib.js';
import {BackGround, TopHeader, LibGrid, ArtistLib, LibImg} from './style.js'
import {Grommet} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pilot from './Pilot.js';
import Peep from './Peep.js';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Lib />} />
        <Route path="/Pilot" element={<Pilot />} />
        <Route path="/Peep" element={<Peep />} />

    </Routes>
  );
}


export default App;
