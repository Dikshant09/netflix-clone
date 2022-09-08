import './App.scss';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Netflix from './pages/Netflix/Netflix';
import SignUp from './pages/SignUp/SignUp';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Context/User/UserContext';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
      <ToastContainer />
    </Router>
    </UserProvider>
  )
}

export default App;