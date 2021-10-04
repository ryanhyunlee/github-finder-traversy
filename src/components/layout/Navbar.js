import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h2>
        <i className={icon}></i> {title}
      </h2>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

export default Navbar;
