import React from 'react';
import styled, { css } from 'styled-components'


const Container = styled.div`
margin-top:20px;
height :300px
display: flex;
flex-wrap: wrap;



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
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
   
        <nav>
        <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
        </nav>
       
    </Container>
     
   
  );
};

export default Pagination;