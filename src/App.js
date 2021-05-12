import { Auth, Home, OrderDetail, UpdateOrder, OrdersCart } from "./pages";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={OrdersCart}/>
        <Route path="/order" component={OrderDetail}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
