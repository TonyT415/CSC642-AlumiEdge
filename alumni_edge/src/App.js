import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
// import HomePage from '/Homepage';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        {/* example of a route for routing to home, results, profile */}
        {/* <Route path="/registration" element={<HomePage />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    
 );
}

export default App;