import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';  // Import Framer Motion
import acmLogo from '../acm-assets/ccet-logo-white.png';
import Section from './Section';


const Footer = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <div class="mt-[120px]">

        <hr class="footer-line"/>

        <footer class="footer">

        <div class="f-container">
          <div class="row">
            <div class="footer-col">
              <h4>CCET ACM</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">resources</a></li>
                <li><a href="#">gallery</a></li>
                <li><a href="#">events</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>explore</h4>
              <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">team</a></li>
                <li><a href="#">achievements</a></li>
                <li><a href="#">acm-w</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>contact us</h4>
              <ul>
                <li><a href="#">webmasters</a></li>
                <li><a href="#">magazine</a></li>
                <li><a href="#">get in touch</a></li>
                <li><a href="#">contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#" class="icons"><FaFacebookF/></a>
                <a href="#" class="icons"><FaInstagram/></a>
                <a href="#" class="icons"><FaTwitter/></a>
                {/* <!-- <a href="#"><i class="icons fab fa-linkedin-in"></i></a> --> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
};

export default Footer;
