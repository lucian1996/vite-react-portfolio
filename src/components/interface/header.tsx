import { Link } from 'react-router-dom';
import PageProps from '../../utility/types/page-props';
import { routes } from '../../utility/config/routes';

export default function Header() {
  // const location = useLocation();
  // const homepage = location.pathname === '/';

  return (
    <div className="header nav">
      {routes.map((page: PageProps, index: number) => (
        <Link
          key={index}
          to={page.href}
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}
