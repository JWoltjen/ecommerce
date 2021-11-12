import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
