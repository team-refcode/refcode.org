import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer-container">
        <div className="footer-main-1">
          <h2>Explore</h2>

          <div>
            <ul className="main_column">
              <li>
                <a href="/pages/team.html">Our Team</a>
              </li>
              <li>
                <a href="/pages/founder.html">Meet the Founder</a>
              </li>
              <li>
                <a href="/our-story">Our Story</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="main_column">
              <li>
                <a href="/pages/graduates-summer-2017.html">Cohorts and Graduates</a>
              </li>
              <li>
                <a href="/pages/teamcode.html">TeamCode</a>
              </li>
              <li>
                <a nohref="" title="Page not created yet.">Photo Albums</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <hr classNameName="hr-1"/>
        </div>

        <div className="footer-main-2">
          <h2>Engage</h2>

          <div>
            <h3>Participants</h3>
            <ul className="main_column">
              <li>
                <a href="/apply">Student Application</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Volunteers</h3>
            <ul className="main_column">
              <li><a href="/volunteer-opportunities">Volunteer Opportunities </a></li>
              <li><a href="https://internal.refcode.org/volunteer">Volunteer Application</a></li>
            </ul>
          </div>

          <div>
            <h3>Connect</h3>
            <ul className="main_column">
              <li><a href="contact.html">Contact Form</a></li>
              <li><a href="/pages/subscribe.html">Subscribe to our Newsletter</a></li>
              <li><a href="https://donate.tektontraining.org/116411-refcode" rel="external">Donate</a></li>
              <li>
                <a href="https://www.facebook.com/refcodecommunity">Facebook</a> /
                <a href="https://www.instagram.com/refcodecommunity">Instagram</a> /
                <a href="https://twitter.com/refcode_tweets">Twitter</a> /
                <a href="https://www.linkedin.com/school/refcode/">LinkedIn</a> /
                <a href="https://www.youtube.com/channel/UCH_hIEFPTFJ7RzptXwdTwWA">YouTube</a>
              </li>
              <li><a href="https://merch.refcode.org/store" rel="external">Buy Merch</a></li>
            </ul>
          </div>

          <div>
            <h3>Businesses</h3>
            <ul className="main_column">
              <li>
                <a href="/pages/partner.html">Partner with us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-main-centered">
          <a href="https://tektontraining.org/" className="no-hover"><img src="../img/tekton_logo.png" className="footer-tekton-logo"/></a>
          <p>Refcode is a program of <a className="underline-footer" href="https://tektontraining.org/our-program/refcode-is-a-program-of-tekton/">Tekton Career Training</a>, a 501(c)3 nonprofit.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
