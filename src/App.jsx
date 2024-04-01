import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ProductDetail from "./components/ProductDetail";
import { QuantityProvider } from "./components/QuantityProvider";



const App = () => {
  return (
    <Router>
      <QuantityProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda de Botines!" />
          </Route>
          <Route path="/item/:id" exact>
            <ProductDetail />
          </Route>
        </Switch>
      </QuantityProvider>
    </Router>
  );
};

export default App;