import { Header } from "./header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ROUTES} from '../routes'



function App() {
  return (
    <>
      <Router>
        <Switch>    
          {
            ROUTES.map((route, index) => <Route key={index} { ...route } />)
          }      
                    
        </Switch>
      </Router>
    </>
  );
}

export default App;
