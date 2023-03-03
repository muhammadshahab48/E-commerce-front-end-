import React from 'react';


// UnAuth Routes 
import Signup from './components/Signup';
import Login from './components/login';
import Navbar from './components/navbar';

// Auth Routes 
import Home from './components/home';
// import Header from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {

  // Checking User auth Status 
  const { authenticatedUser } = useSelector(({ authStates }) => authStates);
  console.log("User auth Status : ", authenticatedUser)

  return (
    <>
      < Navbar />
      <Router>
        {
          (authenticatedUser)
            ?
            (
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            )
            :
            (
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>
            )
        }


      </Router>

    </>
  );
}
// Its checking for git ... changes by Admin

export default App;