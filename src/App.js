import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders"
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from "./firebase";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51LGyOdSBiSPupAB1Ox5ntz9JnRMKHfBBshjC1CQm72t44aaNnbWNm56eMK1PEJs9AM59Xs6UxZEAfLtWMHUOzcMN00Rw28pUDr"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
    <div className="app">
     <Header />
     <Routes>
     <Route exact path="/" element={  <Home />}/>
     <Route path="/checkout" element={  <Checkout />}/>
     <Route path="/orders" element={  <Orders />}/> 
     <Route path="/login" element={  <Login />}/>
     <Route path="/payment" element={
       <Elements stripe={promise}>
              <Payment />
            </Elements>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
