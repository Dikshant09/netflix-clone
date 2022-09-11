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
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/Spinner/PrivateRoute';
import PrivateRouteNetflix from './pages/Netflix/PrivateRouteNetflix';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <UserProvider>
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<PrivateRouteNetflix />}>
          <Route path="/" element={<Netflix />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} /> 
        </Route> 

        <Route path="/forgotPassword" element={<ForgotPassword />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </Router>
    </UserProvider>
  )
}

export default App;