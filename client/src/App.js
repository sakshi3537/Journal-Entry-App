import react from 'react'
import Auth from './components/auth/auth';
import Topnavbar from './components/topnavbar/topnavbar.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/home';
import landingPage from './components/landingPage/landingPage'
const App = () => {
  
  return(
    <div>
    
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={landingPage} />
      <Route path="/auth/signIn" exact component={Auth} />
      </Switch>
      </BrowserRouter>
    </div>
  
  );
}


export default App



