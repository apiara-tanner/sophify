import styled from 'styled-components';
import {Header, Button, Card, Grid, Box, Text, Grommet, Heading, TextArea} from 'grommet';

export const BackGround = styled(Grommet) `
  background: white;
  width: 100%;
  hight: 100%
`

export const LibImg = styled.img `
  width: 100%;
  hight: 100%
`

export const LogoImg = styled.img `
  width: 20%;
  hight: 20%;
  align-self: center;
  padding-left: 40%;
  padding-top: 1%;
  padding-bottom: 1%;
`

export const TopHeader = styled(Header) `
  background: white;
  font-size: 45px;
  font-weight: bold;
  padding: 2%;
  pad: vertical: "large";
  elevation: medium;
  color: black;
  self-align: center;
`

export const HeaderGrid = styled(Grid) `
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  padding: 2%;
`

export const OffSet = styled.div `
  padding-right: 5%;
  padding-left: 5%;
`

export const SubHeader = styled.h1 `
  font-size: 20px;
  font-weight: bold;
  color: #4EA8E5;
`


export const RecLib = styled(Grommet) `
  width: 98%;
  height: 2%;
  margin: 1%;
  border-color: white;
  border-style: solid;
  &:hover {
    border-color: #FF80B2;
  }
`

export const BottomCred = styled(Grommet)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: small;
  text-align: center;
  background: #FF80B2;
  color: black;
`

export const RecGrid = styled(Grid)`
display: grid;
background: black;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const SongTitle = styled(Text)`
  color: #FF80B2;
`
