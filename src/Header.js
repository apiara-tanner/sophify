import logo from './logo.svg';
import './App.css';
import {BackGround, TopHeader, HeaderGrid, LibGrid, ArtistLib, LogoImg} from './style.js'
import {Grommet, Title} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <BackGround>
    <HeaderGrid>
      <Link to="/" style={{textDecoration: 'none'}}>
        <TopHeader> PDX Recipies </TopHeader>
      </Link>

      <h3> About </h3>
      <h3> Sign-Up for Updates </h3>

    </HeaderGrid>
    </BackGround>
  );
}

export default Header;
