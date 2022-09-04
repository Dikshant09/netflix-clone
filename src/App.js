import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import SignUp from './pages/SignUp';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
  )
}

export default App;