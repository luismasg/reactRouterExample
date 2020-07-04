import React from 'react';
import { useLocation } from 'react-router-dom';
import FancyLink from './fancyLink';

export default () => {
  let { pathname } = useLocation();

  return (
    <div style={styles.navbar}>
      <FancyLink to="/admin" pathname={pathname}>
        Ir a admin
      </FancyLink>
      <FancyLink to="/users" pathname={pathname}>
        Ir a users
      </FancyLink>
      <FancyLink to="/dashboard" pathname={pathname}>
        ir a Dashboard
      </FancyLink>
    </div>
  );
};

const styles = {
  navbar: {
    color: 'white',
    backgroundColor: 'grey',
    // padding: 15,
    display: 'flex',
    justifyContent: 'space-around'
  }
};
