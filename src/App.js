import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginController from './views/Dashboard/Dashboard'
import Home  from './views/Home/Home'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import AddGoal from './views/Addgoal/Addgoal'
import Updategoal from './views/UpdateGoal/Updategoal'
function App() {
  return (
  <div>
 <Router>
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/dashboard" component={LoginController}/>
     <Route path="/register" component={Register}/>
     <Route path="/login" component={Login}/>
     <Route path="/addgoal" component={AddGoal} />
     <Route path="/updategoal/:id" component={Updategoal} />
   </Switch>
 </Router>
  </div>
  );
}

export default App;
