import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import HomePage from './HomePage';
import Profile from './Profile';
import Profile1 from './Profiles/Profile1';
import Profile2 from './Profiles/Profile2';
import Profile3 from './Profiles/Profile3';
import Profile4 from './Profiles/Profile4';
import Profile5 from './Profiles/Profile5';
import Profile6 from './Profiles/Profile6';
import Profile7 from './Profiles/Profile7';
import Profile8 from './Profiles/Profile8';
import Profile9 from './Profiles/Profile9';
import Profile10 from './Profiles/Profile10';
import Profile11 from './Profiles/Profile11';
import Profile12 from './Profiles/Profile12';
import Profile13 from './Profiles/Profile13';
import Profile14 from './Profiles/Profile14';
import Profile15 from './Profiles/Profile15';
import Profile16 from './Profiles/Profile16';
import Profile17 from './Profiles/Profile17';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Footer></Footer>
      <Routes>
        {/* example of a route for routing to home, results, profile */}
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile1" element={<Profile1 />} />
        <Route path="/profile2" element={<Profile2 />} />
        <Route path="/profile3" element={<Profile3 />} />
        <Route path="/profile4" element={<Profile4 />} />
        <Route path="/profile5" element={<Profile5 />} />
        <Route path="/profile6" element={<Profile6 />} />
        <Route path="/profile7" element={<Profile7 />} />
        <Route path="/profile8" element={<Profile8 />} />
        <Route path="/profile9" element={<Profile9 />} />
        <Route path="/profile10" element={<Profile10 />} />
        <Route path="/profile11" element={<Profile11 />} />
        <Route path="/profile12" element={<Profile12 />} />
        <Route path="/profile13" element={<Profile13 />} />
        <Route path="/profile14" element={<Profile14 />} />
        <Route path="/profile15" element={<Profile15 />} />
        <Route path="/profile16" element={<Profile16 />} />
        <Route path="/profile17" element={<Profile17 />} />
      </Routes>
    </BrowserRouter>
    
 );
}

export default App;