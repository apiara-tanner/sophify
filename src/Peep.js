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

function Peep() {
  const PeepTracks = [
    {
      name: "SPOTLIGHT (OG)",
      link: "https://sophify.s3.us-west-2.amazonaws.com/og+spotlight+by+lil+peep.mp3"
    },
    {
      name: "MUD ON MY GUCCI",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Mud+On+My+Gucci.mp3"
    },
    {
      name: "WHITE GIRL",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Lil+Peep+-+White+Girl+(OG+Version).mp3"
    },
    {
      name: "GIVING GIRLS COCAINE",
      link: "https://sophify.s3.us-west-2.amazonaws.com/giving+girls+cocaine+w_+lil+tracy+(prod+horsehead).mp3"
    },
    {
      name: "COCAINE SHAWTY",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Lil+Peep+%26+Yunggoth+-+cocaine+shawty.mp3"
    },
  ]

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

    </BackGround>
  );
}

export default Peep;
