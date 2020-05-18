import React from 'react';
import './App.css';
import Showrides from './component/showRides';
import Offerride from './component/offerRide';
import {  Switch, Route } from "react-router-dom";
import Login from './container/Login/login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/show_ride" component={Showrides} />
        <Route path="/offer_ride" exact component={Offerride} />
      </Switch>
    </div>
  );
}
export default App;
