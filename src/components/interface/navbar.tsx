import { Link } from 'react-router-dom';
import PageProps from '../../utility/types/page-props';
import { routes } from '../../utility/config/routes';

export default function Navbar() {
  return (
    <div>
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
