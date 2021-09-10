import { Component } from 'react';

class ChangeParagraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeParagraphsButtons = this.changeParagraphsButtons.bind(this);
  }

  changeParagraphsButtons(e){
    let inputvalue = this.state.value;
    if(e.target.name === 'minus'){
      inputvalue = ((inputvalue === 1)? 1 : (inputvalue - 1));
    } else{
      inputvalue++
    }
    this.handleChange(inputvalue);
  }

  handleChange(value) {
    this.setState({
      value: value
    }, function() {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div className="changeParagraphs d-flex position-absolute">
        <input aria-label={this.props.type} className='form-control' type={this.props.type} min='1' value={this.state.value} onChange={this.handleChange} />
        <button className="controller text-center" aria-label="minus" name="minus" onClick={this.changeParagraphsButtons} >-</button>
        <span className="title text-center">{this.props.title}</span>
        <button className="controller text-center" aria-label="plus" name="plus" onClick={this.changeParagraphsButtons} >+</button>
      </div>
    );
  }
}

export default ChangeParagraphs;