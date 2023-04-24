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

export const TopHeader = styled(Header) `
  background: black;
  font-size: 30px;
  font-weight: bold;
  padding: 1%;
  pad: left: "medium", right: "small", vertical: "large";
  elevation: medium;
  color: pink;
`
export const ArtistLib = styled(Card) `
  width: 98%;
  margin: 1%;
  border-color: white;
  border-style: solid;
  &:hover {
    border-color: pink;
  }
`

export const BottomCred = styled(Grommet)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: small;
  text-align: center;
  background: black;
  color: pink;
`

export const LibGrid = styled(Grid)`
display: grid;
background: black;
grid-template-columns: 1fr 1fr 1fr 1fr;
`
