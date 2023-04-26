import styled from 'styled-components';
import {Header, Button, Card, Grid, Box, Text, Grommet, Heading, TextArea} from 'grommet';

export const BackGround = styled(Grommet) `
  background: black;
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
  background: black;
  font-size: 30px;
  font-weight: bold;
  padding: 1%;
  pad: left: "medium", right: "small", vertical: "large";
  elevation: medium;
  color: #FF80B2;
  self-align: center;
`
export const ArtistLib = styled(Card) `
  width: 98%;
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

export const LibGrid = styled(Grid)`
display: grid;
background: black;
grid-template-columns: 1fr 1fr 1fr 1fr;
`
