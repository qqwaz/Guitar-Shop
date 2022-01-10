import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Search from './search';
import Cart from './cart';

function Header() {
  const location = useLocation();

  const catalogMenuItemStyle = location.pathname === AppRoute.Main ? 'link--current' : '';

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Link className={`header__logo logo ${catalogMenuItemStyle}`} to={AppRoute.Main}>
          <img className="logo__img" width="70" height="70" src="/img/svg/logo.svg" alt="Логотип"/>
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link className={`link main-nav__link ${catalogMenuItemStyle}`} to={AppRoute.Main}>
                Каталог
              </Link>
            </li>
            <li>
              <Link className="link main-nav__link" to={AppRoute.NotFound}>
                Где купить?
              </Link>
            </li>
            <li>
              <Link className="link main-nav__link" to={AppRoute.NotFound}>
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
