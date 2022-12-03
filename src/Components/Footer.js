import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12">
                <span>SPACEX &#169; 2020 </span>
                <div className="s-links">
                  <a href="https://twitter.com/spacex" target="blank">
                    <span> TWITTER</span>
                  </a>
                  <a href="https://www.youtube.com/spacex" target="blank">
                    {" "}
                    <span>YOUTUBE</span>
                  </a>
                  <a href="https://www.instagram.com/spacex/" target="blank">
                    {" "}
                    <span>INSTAGRAM</span>
                  </a>
                  <a href="https://www.flickr.com/photos/spacex" target="blank">
                    {" "}
                    <span>FLICKR</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/spacex/"
                    target="blank"
                  >
                    {" "}
                    <span>LINKEDIN</span>
                  </a>
                  <a
                    href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
                    target="blank"
                  >
                    {" "}
                    <span>PRIVACY POLICY</span>
                  </a>
                </div>
              </div>
              <div className="col-12 text-center">
                <span style={{ fontSize: "1.1rem" }}>
                  {" "}
                  &#169; Developed by Ruthra Moorthy
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;
