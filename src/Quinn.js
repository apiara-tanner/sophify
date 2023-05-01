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

function Quinn() {

  const QuinnTracks = [
    {
      name: "AMORE VITA",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Amore+Vita.mp3"
    },
    {
      name: "BUTTA CHEEZ",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Butta+Cheez.mp3"
    },
    {
      name: "CRAZY MOTHER TRUCKER",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Crazy+MotherTrucker.mp3"
    },
    {
      name: "EVERYDAY",
      link: "https://sophify.s3.us-west-2.amazonaws.com/EVERYDAY.mp3"
    },
    {
      name: "FIRES AND COLORS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Fires+%26+Colors.mp3"
    },
    {
      name: "KLOUD KICKER",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Kloud+Kicker.mp3"
    },
    {
      name: "LIKE THIS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/LIKE+THIS.mp3"
    },
    {
      name: "LOOK WHAT YOU'VE DONE",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Look+What+You've+Done.mp3"
    },
    {
      name: "MARCHING BAND",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Marching+Band.mp3"
    },
    {
      name: "NERDS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Nerds.mp3"
    },
    {
      name: "OCEANS ELEVEN",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Oceans+Eleven.mp3"
    },
    {
      name: "OUR STYLE",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Our+Style.mp3"
    },
    {
      name: "POPULAR",
      link: "https://sophify.s3.us-west-2.amazonaws.com/POPULAR.mp3"
    },
    {
      name: "THE WAY THAT WE GO",
      link: "https://sophify.s3.us-west-2.amazonaws.com/The+Way+That+We+Go.mp3"
    },
    {
      name: "THEY KNOW",
      link: "https://sophify.s3.us-west-2.amazonaws.com/They+Know.mp3"
    },
    {
      name: "VIOLINS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Violins.mp3"
    },
  ]

  return (
    <BackGround>
    <AudioPlayer
      src= {QuinnTracks[0].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[0].name}
      />

    <AudioPlayer
      src=  {QuinnTracks[1].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[1].name}
    />

    <AudioPlayer
      src=  {QuinnTracks[2].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[2].name}
    />

    <AudioPlayer
      src=  {QuinnTracks[3].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[3].name}
    />
    <AudioPlayer
      src= {QuinnTracks[4].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[4].name}
      />

    <AudioPlayer
      src=  {QuinnTracks[5].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[5].name}
    />

    <AudioPlayer
      src=  {QuinnTracks[6].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[6].name}
    />

    <AudioPlayer
      src=  {QuinnTracks[7].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[7].name}
    />
    <AudioPlayer
      src=  {QuinnTracks[8].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[8].name}
    />

    <AudioPlayer
      src=  {QuinnTracks[9].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[9].name}
    />

    <AudioPlayer
      src= {QuinnTracks[10].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[10].name}
    />
    <AudioPlayer
      src= {QuinnTracks[11].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[11].name}
    />

    <AudioPlayer
      src= {QuinnTracks[12].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[12].name}
    />

    <AudioPlayer
      src=  {QuinnTracks[13].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[13].name}
    />
    <AudioPlayer
      src=  {QuinnTracks[14].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[14].name}
    />
    <AudioPlayer
      src=  {QuinnTracks[15].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {QuinnTracks[15].name}
    />

    </BackGround>
  );
}

export default Quinn;
