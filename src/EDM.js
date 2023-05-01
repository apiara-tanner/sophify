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

function EDM() {

  const EDMTracks = [
    {
      name: "SAY MY NAME",
      link: "https://sophify.s3.us-west-2.amazonaws.com/ODESZA+-+Say+My+Name+(Luke+Shay+Remix).mp3"
    },
    {
      name: "MARBLE SODA",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Marble+Soda+(live+mashup)+%5Bvideo+link+in+description%5D.mp3"
    },
    {
      name: "WAVE DASH",
      link: "https://sophify.s3.us-west-2.amazonaws.com/wavedash.mp3"
    },
    {
      name: "CHANEL",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Frank+Ocean+-+Chanel+(Nick+Leon+Atmosphere+Remix).mp3"
    },
    {
      name: "TOUNGE TIED",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Cayman+Cline+Tongue+Tied+(Prod+Cayman+Cline).mp3"
    },
    {
      name: "THE NEXT EPISODE",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Dr+Dre+-+The+Next+Episode+(San+Holo+Remix).mp3"
    },
    {
      name: "SECRETS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Ti%C3%ABsto+%26+KSHMR+Feat+VASSY+-+Secrets+(Bassthunder+Remix).mp3"
    },
    {
      name: "ADVENTURE OF A LIFETIME",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Coldplay+-+Adventure+Of+A+Lifetime+(Audien+Remix).mp3"
    },
    {
      name: "HEAT WAVES",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Glass+Animals+-+Heat+Waves+(KAIVON+Remix).mp3"
    },
    {
      name: "MISERY BUSINESS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Paramore+-+Misery+Business+(KAIVON+Remix).mp3"
    },
    {
      name: "ALL I WANTED",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Paramore+x+Porter+x+Yetep+%26+Danny+Olson+-+All+I+Wanted+x+Language+x+Melting+(MashBit+Mashup).mp3"
    },
    {
      name: "TRAP QUEEN",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Fetty+Wap+-+Trap+Queen+(Crankdat+Remix)+%EF%BF%BD%EF%BF%BD.mp3"
    },
    {
      name: "KIDS",
      link: "https://sophify.s3.us-west-2.amazonaws.com/MGMT+-+Kids+(SYSTEM+KIDS+Remix).mp3"
    },
    {
      name: "KISS ME THROUGH THE PHONE",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Kiss+Me+Thru+The+Phone+__+Austin+Johnson+(Enschway+Re+-+Remix).mp3"
    },
    {
      name: "POP CULTURE",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Pop+Culture+Madeon.mp3"
    },
    {
      name: "EAST OF EDEN",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Kim+Petras+%26+Nicki+Minaj+X+Bad+Friends+-+Alone+(EURO+VERSION)%5BSPED+UP%5D.mp3"
    },
    {
      name: "ALONE",
      link: "https://sophify.s3.us-west-2.amazonaws.com/Kim+Petras+%26+Nicki+Minaj+X+Bad+Friends+-+Alone+(EURO+VERSION)%5BSPED+UP%5D.mp3"
    },
  ]

  return (
    <BackGround>
    <AudioPlayer
      src= {EDMTracks[0].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[0].name}
      />

    <AudioPlayer
      src=  {EDMTracks[1].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[1].name}
    />

    <AudioPlayer
      src=  {EDMTracks[2].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[2].name}
    />

    <AudioPlayer
      src=  {EDMTracks[3].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[3].name}
    />
    <AudioPlayer
      src= {EDMTracks[4].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[4].name}
      />

    <AudioPlayer
      src=  {EDMTracks[5].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[5].name}
    />

    <AudioPlayer
      src=  {EDMTracks[6].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[6].name}
    />

    <AudioPlayer
      src=  {EDMTracks[7].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[7].name}
    />
    <AudioPlayer
      src=  {EDMTracks[8].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[8].name}
    />

    <AudioPlayer
      src=  {EDMTracks[9].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[9].name}
    />

    <AudioPlayer
      src= {EDMTracks[10].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[10].name}
    />
    <AudioPlayer
      src= {EDMTracks[11].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[11].name}
    />

    <AudioPlayer
      src= {EDMTracks[12].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[12].name}
    />

    <AudioPlayer
      src=  {EDMTracks[13].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[13].name}
    />
    <AudioPlayer
      src=  {EDMTracks[14].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[14].name}
    />
    <AudioPlayer
      src=  {EDMTracks[15].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[15].name}
    />
    <AudioPlayer
      src=  {EDMTracks[16].link}
      onPlay={e => console.log("onPlay")}
      layout = "horizontal-reverse"
      header = {EDMTracks[16].name}
    />

    </BackGround>
  );
}

export default EDM;
