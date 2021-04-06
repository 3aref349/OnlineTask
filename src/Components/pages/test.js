import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Axios from 'axios'





const Container = styled.div`
margin-top:20px;
height :200px;
width:25%;
display: flex;
justify-content: flex-start;
flex-direction: column ;

`

const ContainerImage = styled.div`
display-flex;
margin-top:20px;
height :50px;
flex-wrap: wrap;

`
const Title = styled.h1`
font-size:10px;
flex-direction:column;
`
const Image = styled.div`
height:40;
width:auto;


`

class Home extends Component {
    state = {
      photos : [ ]
    }
    componentDidMount(){
      Axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        console.log(res)
        this.setState({
            photos: res.data.slice(0,10)
        })
          }) 
    }
    render(){
      console.log(this.props);
  const { photos } = this.props; //probs
  const postList = photos.map (photo => {
    return (
        <Container>
            <ContainerImage key={photo.id}>
               <Image>{photo.url}</Image>
                <Title>{photo.title}</Title>
            </ContainerImage>
        </Container>
  
    )

  });
  
      return(
        
        <Container>
        {postList}
        </Container>
    

  )
    }
    
    
  }
  

  export default Home
    
