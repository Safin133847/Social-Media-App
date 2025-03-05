import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Details />} />
        <Route path="/" element={<PostList />} />
        <Route path="/item/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;