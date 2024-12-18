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

function Pilot() {

  const PilotsTracks = [
    {
      name: "GUNS FOR HANDS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/GUNS+FOR+HANDS.mp3"
    },
    {
      name: "HOLDING ON TO YOU",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Holding+On+To+You.mp3"
    },
    {
      name: "ODE TO SLEEP",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Ode+to+Sleep.mp3"
    },
    {
      name: "SLOWTOWN",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Slowtown.mp3"
    },
    {
      name: "CAR RADIO",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Car+Radio.mp3"
    },
    {
      name: "FOREST",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Forest.mp3"
    },
    {
      name: "GLOWING EYES",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Glowing+Eyes.mp3"
    },
    {
      name: "KITCHEN SINK",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Kitchen+Sink.mp3"
    },
    {
      name: "ANATHEMA",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Anathema.mp3"
    },
    {
      name: "LOVELY",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Lovely.mp3"
    },
    {
      name: "RUBY",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Ruby.mp3"
    },
    {
      name: "TREES",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Trees.mp3"
    },
    {
      name: "BE CONCERNED",
      link: "https://sophify.s3.us-west-2.amazonaws.com/BE+CONCERNED.mp3"
    },
    {
      name: "CLEAR",
      link: "https://sophify.s3.us-west-2.amazonaws.com/CLEAR.mp3"
    },
    {
      name: "HOUSE OF GOLD",
      link: "https://sophify.s3.us-west-2.amazonaws.com/House+Of+Gold.mp3"
    },
  ]

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
