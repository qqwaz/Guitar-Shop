import { Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import Cart from '../pages/cart/cart';
import Footer from '../common/footer/footer';
import Header from '../common/header/header';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';
import Product from '../pages/product/product';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
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
