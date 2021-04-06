import React, { Component } from 'react'
import styled, { css } from 'styled-components'




const Container = styled.div`
display: flex;
width: 100%;
height: 100px;

flex-flow: row wrap;
background-color:black;
position: fixed;
left: 0;
bottom: 0;
color:white;


`;
const LeftDiv = styled.div`
align-self:flex-start;
height: 100px;

flex-grow: 1;
display: flex;
flex-flow: row wrap;
`;
const Lefh = styled.h1`
font-size:20px;
align-self:flex-start;
font-size:25px;
flex-grow: 1;
margin-right:220px;

`;
const Centh = styled.h1`
font-size:10px;
align-self:flex-end;

margin-right:150px;
margin-top:60px;
text-align: center;
`;

const RightDiv = styled.div`


height: 100px;
flex-grow: 1;

`;
const RightH = styled.h1`
font-size:10px;
align-self:flex-end;

flex-grow: 1;
margin-top:60px;

`;

const Cent = styled.div`

align-self:flex-end;
height: 100px;

flex-grow: 2;

`;


const JSButton = styled.button`

height: 100px;


`;

const Span = styled.span`
color:blue;

`;

 class Footer extends Component {
    render() {
        return (
            <Container>
                <LeftDiv>

                    <Lefh>Weds360</Lefh>
                    </LeftDiv>
                <Cent> <Centh>
                © Copyright <Span>Plus360</Span>. All Rights Reserved </Centh></Cent>
                <RightDiv> <RightH> Terms & ConditionsPrivacy Policy</RightH>

                </RightDiv>
            </Container>
        )
    }
}

export default Footer