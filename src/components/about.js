import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="about">
        <div className="about-content">
          <div className="copy">
            <p dangerouslySetInnerHTML={{ __html: this.props.aboutText }}></p>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
}

export default About;