// App.js
import React from 'react';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import CreateRoom from './component/CreateRoom';
import SignInPage from './component/SignInPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import './App.css';
import JoinRoom from './component/JoinRoom';
import RoomInfo from './component/RoomInfo.js';


//const domain = process.env.REACT_APP_AUTH0_DOMAIN
//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const domain = "dev-rkjah3umfq8c82at.us.auth0.com"
const clientId = "xbeT4PtSPVwbkexbBRsCKmzveb3aNIE0"

function App() {
  return (
    
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/create-room" element={<CreateRoom />} />
            <Route path="/join-room" element={<JoinRoom />} />
            <Route path="/create-room/:roomCode" element={<RoomInfo />} />
            {/* Add other routes as needed */}
          </Routes>
      </Auth0Provider>
    </Router>
  );
}

export default App;