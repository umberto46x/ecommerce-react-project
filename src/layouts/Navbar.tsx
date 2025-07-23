import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header__firstrow">
          <img
            className="header__logo"
            src="../assets/ecommerce_logo.svg"
            alt="E-commerce Logo"
          />
          <h1>E-commerce name</h1>
          <div className="header__searchbar">
            <label htmlFor="search" visually-hidden="true">
              Search
            </label>
            <input
              className="header__searchInput"
              type="search"
              name="search"
              id="search"
            />
            <button className="header__searchSubmit" type="button">
              Search
            </button>
          </div>

          <div className="header__icons">
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/auth'}>Signup/Login</Link>
            <Link to={'/cart'}>Cart</Link>
          </div>
        </div>
        <div className="header__secondrow"></div>
      </header>
      <nav></nav>
    </>
  );
};
