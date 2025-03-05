import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import PostList from '../components/PostList';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
    <div className="home-container">
      <h4 className="page-title">Social Media App</h4>
      <div className="content">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <PostList posts={posts} />
      </div>
      </div>
    </div>
  );
};

export default Home;
