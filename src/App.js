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

function App() {
  return (
    <Routes>
        <Route path="/" element={<Lib />} />
        <Route path="/Pilot" element={<Pilot />} />
    </Routes>
  );
}


export default App;
