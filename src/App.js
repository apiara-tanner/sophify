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
import Mound from './Mound.js';
import EDM from './EDM.js';
import Quinn from './Quinn.js';
import Miller from './Miller.js';
import Sophi from './Sophi.js';




function App() {
  return (
    <Routes>
        <Route path="/" element={<Lib />} />
        <Route path="/Pilot" element={<Pilot />} />
        <Route path="/Peep" element={<Peep />} />
        <Route path="/Mound" element={<Mound />} />
        <Route path="/EDM" element={<EDM />} />
        <Route path="/Quinn" element={<Quinn />} />
        <Route path="/Miller" element={<Miller />} />
        <Route path="/Sophi" element={<Sophi />} />




    </Routes>
  );
}


export default App;
