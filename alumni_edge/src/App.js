import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        {/* example of a route for routing to home, results, profile */}
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    
 );
}

export default App;