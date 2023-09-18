import { Link, useLocation } from 'react-router-dom';
import PageProps from '../../utility/types/page-props';
import { routes } from '../../utility/config/routes';
export default function Navbar() {
  const location = useLocation()
  const homepage = location.pathname == '/'
  return (
    <div className={homepage ? 'flex flex-col justify-center align-center' : 'absolute left-0 right-0'}>
      <div className="title">Lucian</div>
      <div className="nav">
        {routes.map((page: PageProps, index: number) => (
          <Link key={index} to={page.href}>
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
