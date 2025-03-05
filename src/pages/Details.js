import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === parseInt(id)));

  if (!post) return <p>Post not found</p>;

  return (
    <div style={{ color: '#fff' }}>
      <div className="details-container">
        <h4 className="page-title">Social Media App</h4>
        <div className="content">
        <h3>Details Page For Post With ID {id}</h3>
        <img src={`https://picsum.photos/200?random=${id}`} alt="Post" />
        <p>User Id: {post.userId}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
