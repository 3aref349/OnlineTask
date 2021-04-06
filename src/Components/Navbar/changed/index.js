import React, { Component } from 'react'
import styled, { css } from 'styled-components'








const Container = styled.div`
background-color: transparent;
display: flex;
width: 100%;
height: 100px;

flex-flow: row wrap;

`;

const Buttons = styled.button`

  border-radius: 3px;
  
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  float: Right;
  text-align: center;
  padding: 12px;
  color: Black;
  text-decoration: none;
  font-size: 17px;
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

const Nav = styled.div`

width: 100px;
height:50px;
flex-grow: 7;
margin: auto;


`;
 class Changed extends Component {
    render() {
        return (
           <Container>
           <HeaderImg> Web 360</HeaderImg>
              <Nav>
 

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

              </Nav>
              
           </Container>
        )
    }
}
export default  Changed