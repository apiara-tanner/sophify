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
import './edits.css';
import PeepTracks from './music.js';

function Peep() {
  return (
    <BackGround>
    <AudioPlayer
      src= {PeepTracks[0].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PeepTracks[0].name}
      />

    <AudioPlayer
      src=  {PeepTracks[1].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PeepTracks[1].name}
    />

    <AudioPlayer
      src=  {PeepTracks[2].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PeepTracks[2].name}
    />

    <AudioPlayer
      src=  {PeepTracks[3].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PeepTracks[3].name}
    />
    <AudioPlayer
      src= {PeepTracks[4].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PeepTracks[4].name}
      />

    <AudioPlayer
      src=  {PeepTracks[5].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PeepTracks[5].name}
    />
    </BackGround>
  );
}

export default Peep;
