import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div style={{ border: '1px solid #FFFFFF80', padding: '5px', borderRadius: '5px', background: 'black', color: '#FFFFFF80' }}>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" style={{ width: '100%' }} />
      <p>User ID: {post.userId}</p>
      <p>{post.title.length > 20 ? `${post.title.substring(0, 20)}...` : post.title}</p>
      <p>
        {post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body} <br />
        <Link to={`/item/${post.id}`} style={{ textDecoration: 'none' }}>
            <span style={{ color: '#FFFFFF80'}}>Read More...</span>
        </Link>

      </p>
    </div>
  );
};

export default PostCard;
