import React from 'react';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Joshua Woods</h1>
        <nav>
          <ul className="nav-list">
            {['About me', 'Portfolio', 'Contact', 'Resume'].map(page => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`nav-link ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;