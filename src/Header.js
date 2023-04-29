import logo from './logo.svg';
import './App.css';
import {BackGround, TopHeader, LibGrid, ArtistLib, LogoImg} from './style.js'
import {Grommet} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <BackGround>
    <Link to="/">
      <LogoImg src = "https://sophify.s3.us-west-2.amazonaws.com/sophi-fy.png" />
    </Link>
    </BackGround>
  );
}

export default Header;
