import logo from './logo.svg';
import './App.css';
import {BackGround, TopHeader, LibGrid, ArtistLib, LibImg, SongTitle} from './style.js'
import {Grommet} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './edits.css'

function Pilot() {
  return (
    <BackGround>
    <AudioPlayer
      src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      customAdditionalControls={[<SongTitle> Tanner </SongTitle>]}
    />

    <AudioPlayer
      src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
    />

    <AudioPlayer
      src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
    />

    <AudioPlayer
      src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
    />
    </BackGround>
  );
}

export default Pilot;
