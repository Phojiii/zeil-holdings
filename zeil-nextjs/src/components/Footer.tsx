import Image from 'next/image'

export default function Footer() {
  return (
    <div className="site-footer" id="footer">
      <div className="container py-5">
        <div className="footer-content reveal">
          {/* Left Column: Description */}
          <div className="footer-about">
            <Image 
              src="/assets/img/Zeil-Logo.png" 
              alt="Zeil Logo Footer" 
              className="aratica-logo mb-4"
              width={120}
              height={40}
            />
            <p>
              <strong>ZEIL Holdings</strong> is a multi-sector company in the UAE, delivering trust and growth through real estate, finance, education, and tech. Together, we build impactful futures.
            </p>
          </div>

          {/* Middle Column: Site Links */}
          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><a href="#section1">Home</a></li>
              <li><a href="#section2">Our Divisions</a></li>
              <li><a href="#section3">How We Work</a></li>
              <li><a href="#section4">About</a></li>
              <li><a href="#section5">Contact</a></li>
            </ul>
          </div>

          {/* Right Column: Social Media */}
          <div className="footer-social">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61576753161335" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zeil.holdings/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/zeil_holdings" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ZEIL Holdings. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
} 