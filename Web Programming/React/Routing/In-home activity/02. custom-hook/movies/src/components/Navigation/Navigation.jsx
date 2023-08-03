import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Link to="/home">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};

export default Navigation;
