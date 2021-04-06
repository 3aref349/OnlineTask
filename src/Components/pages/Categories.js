import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Breadcrumbs from './Components/Body/Breadcrumbs/Breadcrumbs'
import Middle from './Components/Body/middle/Middle'
import Third from './Components/Body/thirdpart/Third'
import LeftComponent from './Components/Body/leftc/LeftComponent' 

const Container = styled.div`
margin-top:20px;
height :200px;
width:100%
display: flex;
justify-content: flex-start;
flex-direction: row ;

`
const ContainerButtons = styled.div`
order: 1;
margin-top:20px;

height :50px;
display: flex;
flex-wrap: wrap;

`
const Containerinputs = styled.div`
order: 2;
align-self: flex-start;


`
const Button = styled.button`
 
  background: ${props => props.primary ? "Black" : "white"};
  color: ${props => props.primary ? "white" : "Black"};
  font-size: 1em;
  margin: 1em;
  padding: 0.1em 2em;
  border: 1px solid black;
  border-radius: 2px;
`;


const Input = styled.input`
margin-top:20px;
height :40px;
width:300px;
align-self:flex-end;
  font-size: 18px;
  order: 2;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: Black;
  }
  border: 1px solid black;
`;


 class Categories extends Component {
    render() {
        return (
              <Navbar />
  <Breadcrumbs />
  <LeftComponent />


            <Container>
                <ContainerButtons>
                <Button>Clear</Button>
                <Input type="text" placeholder="Name" />
                </ContainerButtons>
            
                <Middle />
 <Third />
  <Footer />
            </Container>
        )
    }
}

export default Categories