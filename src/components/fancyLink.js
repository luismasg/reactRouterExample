import React from 'react';
import { Link } from 'react-router-dom';

export default ({ to, name, className, pathname, children, style }) => {
  return (
    <Link to={to} className={`${pathname === to ? 'active' : ''} ${className}`}>
      {children}
    </Link>
  );
};
