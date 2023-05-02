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

function Sophi() {
  const SophiTracks = [
    {
      name: "ALL MUSIC SOUNDS LIKE YOU (SORRY IM AWKWARD)",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Villard+St+7.mp3"
    },

  ]

  return (
    <BackGround>
    <AudioPlayer
      src= {SophiTracks[0].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {SophiTracks[0].name}
      />

    </BackGround>
  );
}

export default Sophi;
