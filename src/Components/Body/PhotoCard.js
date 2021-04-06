import React from 'react';
import styled, { css } from 'styled-components'

const PhotoCard = styled.div`
background-color:black;
color:white;
display:flex;
  
`
const Image = styled.div`

`

const Posts = ({ photos, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <PhotoCard>
      <ul className='list-group mb-4'>
      {photos.map(photo => (
        <li key={photo.id} >
        
          <img src=  {photo.url} alt=""/>
        </li>
      ))}
    </ul>
      </PhotoCard>
  
  );
};

export default Posts;