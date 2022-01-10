import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoute, DEFAULT_CATALOG_PAGE } from '../../const';
import Cart from '../pages/cart/cart';
import Footer from '../common/footer/footer';
import Header from '../common/header/header';
import Catalog from '../pages/catalog/catalog';
import NotFound from '../pages/not-found/not-found';
import Product from '../pages/product/product';
import { appRouteToPage } from '../../services/utils';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Redirect to={appRouteToPage(DEFAULT_CATALOG_PAGE)} />
        </Route>
        <Route exact path={AppRoute.Catalog}>
          <Catalog />
        </Route>
        <Route exact path={AppRoute.Product}>
          <Product />
        </Route>
        <Route exact path={AppRoute.Cart}>
          <Cart />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
