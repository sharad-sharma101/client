import './App.css';
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import MarketPlace from './components/MarketPlace'
import Dealer from './components/Dealer'
import Login from './components/Login';
import Signup from './components/Signup';
import UserAddedCar from './components/UserAddedCar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CarState from './context/CarState';

function App() {
  return (
    <CarState>
      <div className='bg-cyan-100'>
      <Router>
      <Navbar/>
      <div className="container">
            <Routes>
              <Route exact path="/" element=
              {<MarketPlace  />}>
              </Route>
              <Route exact path="/dealer" element={< Dealer />}>
              </Route>
              <Route exact path="/profile" element={<Profile  />}>
              </Route>
              <Route exact path="/login" element={<Login  />}>
              </Route>
              <Route exact path="/signup" element={<Signup  />}>
              </Route>
              <Route exact path="/car/:id" element={<UserAddedCar />}>
              </Route>
            </Routes>
      </div>
      </Router>  
      </div>
    </CarState>
  );
}

export default App;
