import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import Footer from './Footer.js';
import Payment from './Payment';
import Details from './Details.js';
import { initialState, reducer } from './reducer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
            <Header></Header>
        
        <Switch>
           <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Checkout state={initialState}></Checkout>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/more_details/:id" children={<Details></Details>}>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
        <Footer></Footer>
    </Router>
  );
}

export default App;
