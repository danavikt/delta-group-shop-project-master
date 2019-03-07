import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function PageLayout({ children, navLinks }) {
  return (
    <div className="Page-Layout">
      <header>
        <img
          src="https://www.brandcrowd.com/gallery/brands/thumbs/thumb12609037698059.jpg"
          alt="Company logo"
          className="Logo"
        />
        <nav>
          {navLinks.map((link, i) => (
            <span key={i} className="Nav-Link">
              {link}
            </span>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>© Copyright 2019</footer>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.node),
};

PageLayout.defaultProps = {
  navLinks: [],
};

export default PageLayout;
