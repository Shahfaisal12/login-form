import React from "react";
import {BsGithub, BsMarkdownFill, BsDiscord, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="footer-contact pt-5 pb-4">
            <div className="row">
              <div className="col-xl-3 col-md-3 col-6">
                <div className="footer-col-1">
                <ul>
                  <li><a href="/" className="fw-normal">Imprint</a></li>
                  <li><a href="/" className="fw-normal">Cookie Policy</a></li>
                  <li><a href="/" className="fw-normal">Privacy Policy</a></li>
                  <li><a href="/">Gnosis Token Sale TOS</a></li>
                </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-6">
              <div className="footer-col-2">
                <ul>
                  <li><a href="/"> Conditional Tokens</a></li>
                  <li><a href="/">Protocol</a></li>
                  <li><a href="/">Safe</a></li>
                  <li><a href="/">GnosisDAO</a></li>
                </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-3  col-6">
              <div className="footer-col-3">
                <ul>
                  <li><a href="/">Developers</a></li>
                  <li><a href="/">OpenEthereum</a></li>
                  <li><a href="/">Careers</a></li>
                  <li><a href="/">Blog</a></li>
                </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-6">
              <div className="footer-col-4">
                <ul>
                  <li><a href="/"><div className="roundedFixedBtn-social mb-2"><BsTwitter /></div></a></li>
                  <li><a href="/"><div className="roundedFixedBtn-social mb-2"><BsDiscord /></div></a></li>
                  <li><a href="/"><div className="roundedFixedBtn-social mb-2"><BsMarkdownFill /></div></a></li>
                  <li><a href="/"><div className="roundedFixedBtn-social mb-2"><BsGithub /></div></a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
