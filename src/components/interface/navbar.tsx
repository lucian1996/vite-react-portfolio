import { Link, useLocation } from 'react-router-dom';
import PageProps from '../../utility/types/page-props';
import { routes } from '../../utility/config/routes';

export default function Navbar() {
  const location = useLocation();
  const homepage = location.pathname === '/';

  return (
    <div className={`navbar-container ${homepage ? '' : 'absolute left-0 right-0'}`}>
      <div className="title">Lucian</div>
      <div className="nav">
        {routes.map((page: PageProps, index: number) => (
          <Link
            key={index}
            to={page.href}
            className={`nav-link fade-out'}`}
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
