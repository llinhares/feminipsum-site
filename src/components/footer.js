import { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <footer className="feminipsum-footer fixed-bottom">
        <div className="marquee">
          <div className="marquee__inner" aria-hidden="true">
            <span>{this.props.footerText}</span>
            <span>{this.props.footerText}</span>
            <span>{this.props.footerText}</span>
            <span>{this.props.footerText}</span>
            <span>{this.props.footerText}</span>
            <span>{this.props.footerText}</span>
            <span>{this.props.footerText}</span>
            <span>{this.props.footerText}</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;