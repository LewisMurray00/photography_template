import React from 'react';

//Import components
import Header from './Components/Header';
import AnimRoutes from './Components/AnimRoutes';

//Import Router
import { BrowserRouter as Router } from 'react-router-dom';

//Import Motion
import { motion } from 'framer-motion'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  )
};

export default App;
