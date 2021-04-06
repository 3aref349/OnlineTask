import React, { useState, useEffect ,Component} from 'react';
import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
import Breadcrumbs from '../Body/Breadcrumbs/Breadcrumbs'
import Middle from '../Body/middle/Middle'
import Third from '../Body/thirdpart/Third'
import LeftComponent from '../Body/leftc/LeftComponent' 
import Posts from '../Body/PhotoCard';


import Pagination from '../Body/Paginations';
import axios from 'axios';

  const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPhotos(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
    <Navbar />
  <Breadcrumbs />
  <LeftComponent />
  <Home />
  <Middle />
 <Third />
  <Footer />
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts photos={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={photos.length}
        paginate={paginate}
      />
    </div>
    </div>

  );
};

export default Home;