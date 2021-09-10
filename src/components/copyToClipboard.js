import { Component } from 'react';

class CopyToClipboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToCopy: this.props.textToCopy
    }
  }

  render() {
    return (
      <div>
      <button id="copyToClipboard" className="copyToClipboard position-absolute" aria-label="Copy to clipboard" name="copyToClipboard" onClick={() => {navigator.clipboard.writeText(this.props.textToCopy)}}>{this.props.title}</button>
      </div>
    );
  }
}

export default CopyToClipboard;