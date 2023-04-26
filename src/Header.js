import logo from './logo.svg';
import './App.css';
import {BackGround, TopHeader, LibGrid, ArtistLib, LogoImg} from './style.js'
import {Grommet} from 'grommet';


function Header() {
  return (
    <BackGround>
      <LogoImg src = "https://sophify.s3.us-west-2.amazonaws.com/sophi-fy.png" />
    </BackGround>
  );
}

export default Header;
