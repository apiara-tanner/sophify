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

function Mound() {
  const MoundTracks = [
    {
      name: "COIL",
      link: "https://sophify.s3.us-west-2.amazonaws.com/GHOST+MOUNTAIN+-+COIL.mp3"
    },
    {
      name: "NEVADA",
      link: "https://sophify.s3.us-west-2.amazonaws.com/SEMATARY+%26+GHOST+MOUNTAIN+-+NEVADA+VIDEO+IN+DESCRIPTION+.mp3"
    },
    {
      name: "COP KILLER",
      link: "https://sophify.s3.us-west-2.amazonaws.com/SEMATARY+%26+GHOST+MOUNTAIN+-+COP+KILLER.mp3"
    },
    {
      name: "I HATE MYSELF",
      link: "https://sophify.s3.us-west-2.amazonaws.com/SEMATARY+%26+GHOST+MOUNTAIN+-+I+HATE+MYSELF+RARE+2019+.mp3"
    },
    {
      name: "NEW ROCKS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/SEMATARY+%26+GHOST+MOUNTAIN+-+NEW+ROCKS+VIDEO+IN+DESCRIPTION+.mp3"
    },
    {
      name: "GRAVE PLOT",
      link: "https://sophify.s3.us-west-2.amazonaws.com/GRAVE+PLOT.mp3"
    },
  ]

  return (
    <BackGround>
    <AudioPlayer
      src= {MoundTracks[0].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MoundTracks[0].name}
      />

    <AudioPlayer
      src=  {MoundTracks[1].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MoundTracks[1].name}
    />

    <AudioPlayer
      src=  {MoundTracks[2].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MoundTracks[2].name}
    />

    <AudioPlayer
      src=  {MoundTracks[3].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MoundTracks[3].name}
    />
    <AudioPlayer
      src= {MoundTracks[4].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MoundTracks[4].name}
      />
      <AudioPlayer
        src= {MoundTracks[5].link}
        onPlay={e => console.log("onPlay")}
        layout = "horizontal-reverse"
        header = {MoundTracks[5].name}
        />

    </BackGround>
  );
}

export default Mound;
