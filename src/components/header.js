import { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, function() {
      this.props.onClick(this.state.value);
    });
  }

  render() {
    return (
      <header className="feminipsum-header fixed-top">
        <nav className="navbar navbar-expand-lg py-0">
          <div className="container-fluid">
            <a href={(this.props.hashChange === 'about')? '#home' : '#about'} className="btn navbar-brand px-0">{(this.props.hashChange === 'home')? this.props.aboutTitle : this.props.closeAboutTitle}</a>
            <ul className="navbar-nav ms-auto me-0">
              {this.props.languages.map((lang,index) => <li className="nav-item" key={index}><button aria-label={lang.label} data-active={this.state.value} value={lang.id} className="btn nav-link text-capitalize" onClick={this.handleChange}>{lang.label}</button></li>)}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;