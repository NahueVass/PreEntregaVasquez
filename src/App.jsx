import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda de Botines!" />
          </Route>
          <Route path="/item/:id" exact>
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
