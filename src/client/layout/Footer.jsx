import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        maxxborer@gmail.com
        <br />
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Maxx Borer
      </footer>
    );
  }
}

export default Footer;
