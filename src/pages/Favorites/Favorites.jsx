import { Link, useLocation } from 'react-router-dom';

export default function Favorites() {
  const location = useLocation();

  return (
    <div>
      <p>Favorites</p>
      <Link to={location.state?.from ?? '/'}>Home back </Link>
    </div>
  );
}
