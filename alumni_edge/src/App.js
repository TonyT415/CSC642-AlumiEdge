import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
// import HomePage from '/Homepage';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        {/* example of a route for routing to home, results, profile */}
        {/* <Route path="/registration" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;