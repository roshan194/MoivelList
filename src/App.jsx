import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import MovieDetails from './pages/movieDetails/MovieDetails';
import './index.css';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Navbar />
      <Box p="2rem 0rem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
