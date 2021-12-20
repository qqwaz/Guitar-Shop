import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function NotFound() {
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="title title--bigger page-content__title">Error 404: Not found</h1>
        <Link to={AppRoute.Main}>
          <p className='link'>Go to main page</p>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
