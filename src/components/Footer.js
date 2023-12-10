import './Footer.css';
import Logo from '../images/Logo.svg';
import Badge from '../images/top-post-badge.svg';
import Sputnikatx from '../images/sputnikatx.png';


function Footer() {
  return (
    <div className="footer">
        <div className='footer-column' style={{width:'35%'}}>
            <div className='footer-logo'>
                <img src={Logo} alt="Logo" className='Logo'/>
                <div className='logo-text'>
                    Afforai
                </div>
            </div>
            <div className='description'>
                Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.
                <br></br> <br></br>
                Copyright © 2023 Afforai Inc. All rights reserved.
            </div>
            <img src={Badge} alt="Badge" className='badge'/>

            <div className='sput-div'>
                Backed by
                <img src={Sputnikatx} alt="Sputnikatx" className='sput'/>
            </div>
        </div>
        <div className='footer-column'>
            <div className='footer-title'>Company</div>
            <ul className='footer-ul'>
                <li className='footer-li'>Our Story</li>
                <li className='footer-li'>Affiliate</li>
                <li className='footer-li'>Security</li>
                <li className='footer-li'>Roadmap</li>
                <li className='footer-li'>Contact Us</li>
            </ul>
        </div>
        <div className='footer-column'>
            <div className='footer-title'>Resources</div>
            <ul className='footer-ul'>
                <li className='footer-li'>Help Center</li>
                <li className='footer-li'>Api Docs</li>
                <li className='footer-li'>Terms of Use</li>
                <li className='footer-li'>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-column'>
            <div className='footer-title'>Follow Us</div>
            <ul className='footer-ul'>
                <li className='footer-li'>Facebook Group</li>
                <li className='footer-li'>LinkedIn</li>
                <li className='footer-li'>Twitter</li>
                <li className='footer-li'>Medium Blog</li>
            </ul>
        </div>
            <div className='footer-column'><div className='footer-title'>Language</div>
            <ul className='footer-ul'>
                <li className='footer-li'>English</li>
                <li className='footer-li'>Vietnamese</li>
            </ul></div>
    </div>
  );
}

export default Footer;