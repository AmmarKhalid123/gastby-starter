import React from 'react';
import { Link } from 'gatsby';
import Header from '../header';

export default function Home() {
  return (
    <div>
        <Header text='My Contact' />
        <Link to='/'>Back To Home</Link>
        <div>email: ammarkhalid237@gmail.com</div>
    </div>
  );
}
