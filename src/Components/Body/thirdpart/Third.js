import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
margin-top:20px;
height :300px
display: flex;
flex-wrap: wrap;

justify-content: center;

`
const Block = styled.div`
width:300px;
height:300px;
margin-right:20px;
margin-left:20px;
margin-bottom:15px;
border: 1px solid blue;
display: flex;
background-color:black;
flex-direction:column ;
`
const Title = styled.h1`
color white;
  font-size:25px;
`
const Paragraph = styled.p`
color white;
font-size:15px;
`


 class Third extends Component {
    render() {
        return (
         <Container>
<Block>
<Title>lkdhckcjskb</Title>
<Paragraph>;jhcgvhjkl;;lkjh</Paragraph>

</Block>

<Block>
<Title>lkdhckcjskb</Title>
<Paragraph>hcgvhjkl;;lkjh</Paragraph>

</Block>

<Block>
<Title>lkdhckcjskb</Title>
<Paragraph>hcgvhjkl;;lkjh</Paragraph>

</Block>

<Block>
<Title>lkdhckcjskb</Title>
<Paragraph>hcgvhjkl;;lkjh</Paragraph>

</Block>

<Block>
<Title>lkdhckcjskb</Title>
<Paragraph>hcgvhjkl;;lkjh</Paragraph>

</Block>

<Block>
<Title>lkdhckcjskb</Title>
<Paragraph>hcgvhjkl</Paragraph>

</Block>
         </Container>
        )
    }
}

export default Third