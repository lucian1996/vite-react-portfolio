import { Link, useLocation } from 'react-router-dom';
import PageProps from '../../utility/types/page-props';
import { routes } from '../../utility/routes';
import GetIsMobile from '../../utility/function/get-is-mobile';

export default function Header() {
  const isMobile = GetIsMobile();
  const location = useLocation();
  const homepage = location.pathname === '/';
  if (isMobile && !homepage) {
    return (
      <div className="nav sticky top-0 w-full bg-black z-20">
        <Link to="/">Home</Link>
      </div>
    );
  } else {
    return (
      <div className="nav">
        {routes.map((page: PageProps, index: number) => (
          <Link key={index} to={page.href}>
            {page.title}
          </Link>
        ))}
      </div>
    );
  }
}
