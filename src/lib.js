import logo from './logo.svg';
import './App.css';
import {BackGround, TopHeader, LibGrid, ArtistLib, LibImg} from './style.js'
import {Grommet} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pilot from './Pilot.js';
import Header from './Header.js'

function Lib() {
  return (
    <BackGround>
      <LibGrid>
        <ArtistLib>
        <Link to="/Pilot">
        <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilots-01.png' />
        </Link>

         </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/quinn-01.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/peep-02.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/quinn-01.png' /> </ArtistLib>

      </LibGrid>
    </BackGround>
  );
}


export default Lib;
