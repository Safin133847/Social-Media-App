import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.data.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <h2 style={{ color: 'white', textAlign: 'center' }}>Post not found</h2>;
  }

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <img src={`https://source.unsplash.com/600x400/?nature,water&random=${post.id}`} 
           alt="Post" 
           style={{ width: '600px', borderRadius: '10px', marginBottom: '20px' }} 
      />
      <h2>User ID: {post.userId}</h2>
      <h1>{post.title}</h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', fontSize: '18px' }}>
        {post.body}
      </p>
    </div>
  );
};

export default PostDetail;
