import { Link } from 'react-router-dom';
import logo from '../assets/images/ecommerce_logo.svg';
import search from '../assets/images/search.svg';
import person from '../assets/images/person.svg';
import auth from '../assets/images/box-arrow-in-right.svg';
import cart from '../assets/images/cart.svg';

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header__heading row">
          <Link className="col-5 col-md-3" to={'/'}>
            {' '}
            <img src={logo} className="header__logo " alt="ecommerce-logo" />
          </Link>
          <h1 className="col-5 col-md-3">E-commerce name</h1>
          <div className="header__searchbar col-12 col-md-4 ">
            <label htmlFor="search" visually-hidden="true">
              Search
            </label>
            <input
              className="header__searchInput"
              type="search"
              name="search"
              id="search"
              placeholder="Search for something"
            />
            <button className="header__searchSubmit" type="button">
              <img src={search}></img>
            </button>
          </div>

          <div className="header__icons col-12">
            <ul className="row">
              <li className="col-3 " role="button">
                <Link to={'/profile'}>
                  <img src={person} alt="Profile Icon" />
                </Link>
              </li>
              <li className="col-3" role="button">
                <Link to={'/auth'}>
                  {' '}
                  <img src={auth} alt="Auth Icon" />
                </Link>
              </li>
              <li className="col-3" role="button">
                {' '}
                <Link to={'/cart'}>
                  {' '}
                  <img src={cart} alt="Cart Icon>" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <nav className="header__links row">
          <ul className="row col-12 ">
            <li className="col-6  " role="button">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="col-6 " role="button">
              <Link to={'/products'}>Products</Link>
            </li>
            <h2 className="col-12">Categories</h2>
            <li className="col-6 col-md-3 " role="button">
              <Link to={"/products/?q=men's clothing"}>Men's Clothing</Link>
            </li>
            <li className="col-6 col-md-3 " role="button">
              <Link to={'/products/?q=jewelery'}>Jewelry</Link>
            </li>
            <li className="col-6 col-md-3 " role="button">
              <Link to={'/products/?q=electronics'}>Electronics</Link>
            </li>
            <li className="col-6 col-md-3 " role="button">
              <Link to={"/products/?q=women's clothing"}>Women's clothing</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
