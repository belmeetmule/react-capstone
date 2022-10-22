import React from 'react';

const Footer = () => (
  <div
    className="footer footer-alt"
    style={{
      width: '100%',
      position: 'fixed',
      bottom: '0',
      height: 'auto',
    }}
  >

    <a
      className="text-link"
      href="https://belmeetmule.github.io/My-Portfolio/"
      target="_blank"
      rel="noreferrer"
      style={{ color: '#fff', textDecoration: 'none', fontSize: '1.4rem' }}
    >
      Mulugeta M
    </a>
    <br />
    <p>
      {' '}
      &copy;
      {' '}
      {' '}
      2022
      {' '}
    </p>
  </div>
);
export default Footer;
