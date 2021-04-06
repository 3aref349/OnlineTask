import React, { Component } from 'react'
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Breadcrumbs from './Components/Body/Breadcrumbs/Breadcrumbs'
import Middle from './Components/Body/middle/Middle'
import Third from './Components/Body/thirdpart/Third'
import LeftComponent from './Components/Body/leftc/LeftComponent' 
import Posts from '../Body/PhotoCard';
import Pagination from '../Body/Paginations';
import axios from 'axios';
import {connect} from 'react-redux'





class Category extends Component {

    handleClick=() =>{
        this.props.deletePost(this.props.photo.id);
   this.props.history.push('/home');
     
    }
    render(){
        console.log(this.props)
    const post = this.props.post ? (
        <div className="Post">
            <h4 className="center">{this.props.title}</h4>
            <p>{this.props.post.body}</p>
 
        </div>
    ) : (
        <div className="center">Loaading Posts ...</div>
    )
     
    
        return(

    <div className="container">
      {photo}
      <Navbar />
  <Breadcrumbs />
  <LeftComponent />
  <Pagination
        postsPerPage={postsPerPage}
        totalPosts={photos.length}
        paginate={paginate}
      />
  <Home />
  <Middle />
 <Third />
  <Footer />
  
      </div>

  


 
  

      
     
      
        )
      
    }

    
const mapStateToProps =(state,ownProps) => {
    
    // return diff properties 
   let id = ownProps.match.params.post_id ;
   return {  post :state.posts.find(post => post.id ===id)}
     
}


export default connect(mapStateToProps)(Category)

  