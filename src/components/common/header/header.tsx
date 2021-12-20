import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Search from './search';
import Cart from './cart';

function Header() {
  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Link className="header__logo logo" to={AppRoute.Main}>
          <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"/>
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link className="link main-nav__link link--current" to={AppRoute.Main}>
                Каталог
              </Link>
            </li>
            <li>
              <Link className="link main-nav__link" to='#'>
                Где купить?
              </Link>
            </li>
            <li>
              <Link className="link main-nav__link" to="#">
                О компании
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
