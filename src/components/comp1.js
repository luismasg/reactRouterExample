import React from 'react';
import { Link, useParams } from 'react-router-dom';

function comp1(props) {
  const { params } = props.match;
  return (
    <>
      <h1>Hello from comp1</h1>
      <h1>details from user: {params.id}</h1>
      <Link to="/admin">Ir a Comp 2</Link>
    </>
  );
}

export default comp1;
