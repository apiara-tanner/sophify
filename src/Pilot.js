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
import PilotsTracks from './music.js';

function Pilot() {
  return (
    <BackGround>
    <AudioPlayer
      src= {PilotsTracks[0].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[0].name}
      />

    <AudioPlayer
      src=  {PilotsTracks[1].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[1].name}
    />

    <AudioPlayer
      src=  {PilotsTracks[2].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[2].name}
    />

    <AudioPlayer
      src=  {PilotsTracks[3].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[3].name}
    />
    <AudioPlayer
      src= {PilotsTracks[4].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[4].name}
      />

    <AudioPlayer
      src=  {PilotsTracks[5].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[5].name}
    />

    <AudioPlayer
      src=  {PilotsTracks[6].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[6].name}
    />

    <AudioPlayer
      src=  {PilotsTracks[7].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[7].name}
    />
    <AudioPlayer
      src=  {PilotsTracks[8].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[8].name}
    />

    <AudioPlayer
      src=  {PilotsTracks[9].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[9].name}
    />

    <AudioPlayer
      src= {PilotsTracks[10].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[10].name}
    />
    <AudioPlayer
      src= {PilotsTracks[11].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[11].name}
    />

    <AudioPlayer
      src= {PilotsTracks[12].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[12].name}
    />

    <AudioPlayer
      src=  {PilotsTracks[13].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[13].name}
    />
    <AudioPlayer
      src=  {PilotsTracks[14].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {PilotsTracks[14].name}
    />
    </BackGround>
  );
}

export default Pilot;
