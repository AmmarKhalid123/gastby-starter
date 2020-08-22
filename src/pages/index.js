import React from 'react';
import { Link } from 'gatsby';
import Header from '../header';

export default function Home() {
  return (
    <div>
        <Header text='Hello Gatsby!' />
        <Link to='/contact/'>Contact Us</Link>
        <div>My First Gatsby Site!</div>
    </div>
  );
}
