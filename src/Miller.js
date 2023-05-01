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

function Miller() {

  const MillerTracks = [
    {
      name: "72",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+72.mp3"
    },
    {
      name: "BILL",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Bill+(feat.+Earl+%26+Bill).mp3"
    },
    {
      name: "DR THOMAS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Dr.+Thomas.mp3"
    },
    {
      name: "GRANDPA USED TO CARRY A FLASK",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Grandpa+Used+To+Carry+A+Flask+(feat.+Mac+Miller).mp3"
    },
    {
      name: "HALO",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Halo.mp3"
    },
    {
      name: "LABIDO",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Labido.mp3"
    },
    {
      name: "LARRY",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Larry.mp3"
    },
    {
      name: "MELVIN",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Melvin.mp3"
    },
    {
      name: "THE JESUITS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+The+Jesuits+(feat.+Da%24h).mp3"
    },
    {
      name: "VERTIGO",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Delusional+Thomas+-+Vertigo.mp3"
    },
  ]

  return (
    <BackGround>
    <AudioPlayer
      src= {MillerTracks[0].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[0].name}
      />

    <AudioPlayer
      src=  {MillerTracks[1].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[1].name}
    />

    <AudioPlayer
      src=  {MillerTracks[2].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[2].name}
    />

    <AudioPlayer
      src=  {MillerTracks[3].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[3].name}
    />
    <AudioPlayer
      src= {MillerTracks[4].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[4].name}
      />

    <AudioPlayer
      src=  {MillerTracks[5].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[5].name}
    />

    <AudioPlayer
      src=  {MillerTracks[6].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[6].name}
    />

    <AudioPlayer
      src=  {MillerTracks[7].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[7].name}
    />
    <AudioPlayer
      src=  {MillerTracks[8].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[8].name}
    />

    <AudioPlayer
      src=  {MillerTracks[9].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {MillerTracks[9].name}
    />


    </BackGround>
  );
}

export default Miller;
