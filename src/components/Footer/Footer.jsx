import React from 'react';
import './style/Footer.scss';

const SOCIAL_NETWORKS = [
  { url: 'https://github.com/caueperuque', iconClass: 'fab fa-github' },
  { url: 'https://www.linkedin.com/in/caueperuque', iconClass: 'fab fa-linkedin' },
];

function Footer() {
  return (
    <footer>
      <div className="social-networks">
        {SOCIAL_NETWORKS.map((network, index) => (
          <a
            key={ index }
            target="_blank"
            href={ network.url }
            rel="noreferrer"
            style={ { textDecoration: 'none' } }
          >
            <i className={ network.iconClass } />
          </a>
        ))}
      </div>
      <p className="end">Cauê P. - &copy; 2023</p>
    </footer>
  );
}

export default Footer;
