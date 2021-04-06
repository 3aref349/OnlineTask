import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import logo from '../../photos/logo.png'

const Container = styled.div`
display: flex;
width: 100%;
height: 100px;

flex-flow: row wrap;

`;

const RightDiv = styled.div`

border-bottom: 1px solid Black;
border-top: 1px solid Black;
  width: 100px;
  height: 50px;;
  flex-grow:4;
  margin: auto;
  flex-basis:auto
 `;

 const LeftDiv = styled.div`
 border-bottom: 1px solid Black;
 border-top: 1px solid Black;
 width: 100px;
 height: 50px;;
 flex-grow: 4;
 flex-shrink:4
 margin: auto;
 align-self:  flex-start ;
 
 `;

 const HeaderImg = styled.div`
font-size :40px;
font-weight: bold;
  width:50px;
  height: 50px;;
  flex-grow: 1;
  align-self: center;
  font-style: italic;
  font-family: "Times New Roman"
 
 `
 const DropDown = styled.div`

 position: relative;
  display: inline-block;
 
  }
   
 `;

 const DropButton = styled.button`

background-color:white;
 color: Black;
 padding: 16px;
 font-size: 16px;
 border: none;
 font-weight: bold;

  &:hover {
  cursor:pointer;
    Dropdowncontent {
        display: block;
    }

 
 `;

 const Dropdowncontent = styled.div`
 display: none;
 position: absolute;
 background-color: black;
 min-width: 160px;
 box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
 z-index: 1;
 &:hover {
  display: block;
}
 
 `;

 const HyperLink = styled.a`
 color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    color: red;
  }
 `;
const Buttons = styled.button`
order: 2;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  margin: auto;
`;

 class Basic extends Component {
    render() {
        return (
           <Container>
          <RightDiv>
<DropDown>
  <DropButton>360 PLANNER
    <Dropdowncontent>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>

    </Dropdowncontent>
  </DropButton>
</DropDown>

<DropDown>
  <DropButton>HER
    <Dropdowncontent>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>

    </Dropdowncontent>
  </DropButton>
</DropDown>

<DropDown>
  <DropButton>HIM
    <Dropdowncontent>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>

    </Dropdowncontent>
  </DropButton>
</DropDown>

<DropDown>
  <DropButton>THE WEDDING
    <Dropdowncontent>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>

    </Dropdowncontent>
  </DropButton>
</DropDown>
          </RightDiv>
    

<HeaderImg>
<img src="" alt=""/>
Wed 360
</HeaderImg>


<LeftDiv >
<DropDown>
  <DropButton>VENDORS
    <Dropdowncontent>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>

    </Dropdowncontent>
  </DropButton>
</DropDown>
<DropDown>
  <DropButton>GALLERY
    <Dropdowncontent>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>

    </Dropdowncontent>
  </DropButton>
</DropDown>
<DropDown>
  <DropButton>IDEAS & MORE
    <Dropdowncontent>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>
      <HyperLink>we</HyperLink>

    </Dropdowncontent>
  </DropButton>
</DropDown>

</LeftDiv>

           </Container>
        )
    }
}
export default  Basic