import React from 'react';
import { Link, Route } from 'react-router-dom';

const comp2 = () => {
  return (
    <>
      <h1> componente 2 </h1>
      <Link to="/" className="dfddf">
        Ir a component 1
      </Link>
      <Link to="/admin/edit" className="dfddf">
        editar mi profile
      </Link>
      <Link to="/admin/profile" className="dfddf">
        Mi cuenta
      </Link>
      <hr />

      <Route path="/admin/edit" component={() => <h1> please update you details</h1>} />
      <Route path="/admin/profile" component={() => <h1>Your Account </h1>} />
    </>
  );
};

export default comp2;
