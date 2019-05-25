import React from 'react';
import styled from 'styled-components';

function Footer(props) {
  return (
    <React.Fragment>
      <hr />
      <div onClick={props.toggle} className="tool-icon">
        <i className="icon fas fa-tools  fa-2x" />
      </div>
    
    
    <FooterContainer className="main-footer">
      <div className="footer-middle">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>WHASE</h4>
            <ul className="list-unstyled">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
              <li><a href="/">Lorem ipsum</a></li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center text-center">
            &copy;{new Date().getFullYear()} WHASE - All Rights Reserved
          </p>
        </div>
      </div>
      </div>
    </FooterContainer>
    </React.Fragment>
  )
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: #343a40;
    padding-top: 3rem; 
    color: #fff;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: rgba(109, 109, 109);
  }

  ul li a:hover {
    color: rgba(172, 172, 172);
    text-decoration: none; 
  }
`;