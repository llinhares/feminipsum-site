import { Component } from 'react';

class RenderText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: ''
    }
    this.setRenderTextMaxHeight = this.setRenderTextMaxHeight.bind(this);
  }

  componentDidMount() {
    this.setRenderTextMaxHeight();
    window.addEventListener('resize', this.setRenderTextMaxHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setRenderTextMaxHeight);
  }

  setRenderTextMaxHeight(){
    let width = this.renderText.clientWidth;
    let height = this.renderText.clientHeight;
    //console.log(width+"x"+height);
    if(width < 768){
      height -= 114;
      //console.log("sm");
    } else{
      height -= 124;
      //console.log("lg");
    }
    this.setState({
      maxHeight: height
    });
  }

  render() {
    return (
      <div className="renderTextContainer" ref={(renderText) => {this.renderText = renderText}}>
        <div id="renderText" style={{maxHeight: this.state.maxHeight}}></div>
      </div>
    );
  }
}

export default RenderText;