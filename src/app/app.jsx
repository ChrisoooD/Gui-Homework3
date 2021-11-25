import { Header } from "./header";
import { ProductList } from "./productList";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {ROUTES} from '../routes'



function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>    
          {
            ROUTES.map((route, index) => <Route key={index} { ...route } />)
          }      
                    
        </Routes>
      </Router>
    </>
  );
}

export default App;
