import { Auth, Home, OrderDetail, UpdateOrder, OrdersCart } from "./pages";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {AppContext} from './context/AppContext';
import { useContext } from "react";
import { CircularProgress, Spinner } from "@chakra-ui/react";


function App() {

  const { resources } = useContext(AppContext)

  if(resources.loading) return <CircularProgress isIndeterminate color="green.300" />

  return (
    <Router>
      <Switch>
        <Route path="/order" component={OrderDetail}/>
        <Route path="/cart" component={OrdersCart}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;