import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "../Components/Overview";
import Orders from "../Components/Orders";
import Payment from "../Components/Payment";
import UserProfile from "../Components/UserProfile";

function Paths (){
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/overview" Component={Overview} />
          <Route path="/orders" Component={Orders} />
          <Route path="/payment" Component={Payment} />
          <Route path="/" Component={UserProfile} />
        </Routes>
      </Router>
    </div>
  );
}
  
export default Paths;