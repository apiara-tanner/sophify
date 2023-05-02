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

import Header from './Header.js';
import Bottom from './Bottom.js';


function Lib() {
  return (
    <BackGround>
      <LibGrid>
        <ArtistLib>
        <Link to="/Pilot">
        <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilots-01.png' />
        </Link>
         </ArtistLib>
         <ArtistLib>
         <Link to="/Quinn">
          <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/quinn-01.png' />
          </Link>
  </ArtistLib>
        <ArtistLib>
        <Link to="/Peep">
        <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/peep-02.png' />
         </Link>
         </ArtistLib>

        <ArtistLib>
        <Link to="/EDM">
         <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/EDMNEW-03.png' />
         </Link>
          </ArtistLib>
        <ArtistLib>
        <Link to="/Mound">
         <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/mound-05.png' />
         </Link>

          </ArtistLib>
          <ArtistLib>
          <Link to="/Miller">
           <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/MAC+MILLER-05.png' />
           </Link>
           </ArtistLib>

        <ArtistLib>
        <Link to="/Sophi">
        <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/to_sophi-04.png' />
        </Link>

         </ArtistLib>

      </LibGrid>
      <Bottom />
    </BackGround>
  );
}


export default Lib;
