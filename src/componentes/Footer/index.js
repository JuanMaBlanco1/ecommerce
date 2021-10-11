import React, { Component } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./index.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a className="social-github" href="https://github.com/SantiPoggi" target="blank">
            <GitHub
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a className="social-linkedin" href="https://www.linkedin.com/in/santiago-poggi-914325168" target="blank">
            <LinkedIn
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2021 Copyright
          <a href="https://www.linkedin.com/in/santiago-poggi-914325168" target="blank">
            {" "}
            Santiago Poggi
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;