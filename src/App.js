
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Employee from "./components/Employee/Employee";
import Home from "./components/Home/Home";
import Nevigation from './components/Nav/Nevigation';
import NotFound from "./components/NotFound/NotFound";
import SingleEmployee from "./components/SingleEmployee/SingleEmployee";
function App() {
  return (
    <div>
     <Router>
       <Nevigation/>
     <Switch>
       <Route exact path='/'>
           <Home></Home> 
       </Route>
       <Route exact path='/home'>
           <Home></Home> 
       </Route>
       <Route exact path='/employee'>
            <Employee></Employee>
       </Route>
       <Route exact path='/employee/:id'>
            <SingleEmployee></SingleEmployee>
       </Route>
       <Route path='/*'>
            <NotFound></NotFound>
       </Route>
     </Switch>
     </Router>  
     </div>       
  );
  }

export default App;
