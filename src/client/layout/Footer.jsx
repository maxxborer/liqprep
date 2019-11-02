import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
      ***REMOVED***@ya.ru
        <br />
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        ***REMOVED*** Maxim
      </footer>
    );
  }
}

export default Footer;
