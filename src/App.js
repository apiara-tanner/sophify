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

function App() {
  return (
    <Grommet>
      <LibGrid>
      <Link>About</Link>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
        <ArtistLib> <LibImg src = 'https://sophify.s3.us-west-2.amazonaws.com/pilot.png' /> </ArtistLib>
      </LibGrid>
    </Grommet>
  );
}


export default App;
