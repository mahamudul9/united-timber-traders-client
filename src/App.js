import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Projects from './Components/Home/Projects/Projects';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import Book from './Components/Dashboard/Book/Book';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './Components/Dashboard/ManageServices/ManageServices';
import Pricing from './Components/Home/Pricing/Pricing';
import Testimonial from './Components/Home/Testimonial/Testimonial';
import Review from './Components/Dashboard/Review/Review';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <PrivateRoute path="/reviews">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <Route path="/pricing">
            <Pricing/>
          </Route>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
