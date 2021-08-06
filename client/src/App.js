import react, { useState } from 'react'
import Auth from './components/auth/auth';
import Topnavbar from './components/topnavbar/topnavbar.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/home';
import LandingPage from './components/landingPage/landingPage'
const App = () => {
  const [isSignUp,setIsSignUp] =useState(false);
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={()=>(<LandingPage isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>)} />
      <Route path="/auth" exact component={()=>(<Auth isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>)} />
      <Route path="/home" exact component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  
  );
}


export default App



