import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import feminipsumLogoDesk from './../assets/imgs/feminipsum.png';
import feminipsumLogoMob from './../assets/imgs/feminipsum-mob.png';

import Header from '../components/header';
import About from '../components/about';
import ChangeParagraphs from '../components/changeParagraphs';
import RenderText from '../components/renderText';
import CopyToClipboard from '../components/copyToClipboard';
import Footer from '../components/footer';

import localizeSite from '../assets/localize.json';
import feminipsumData from '../assets/feminipsumData.json';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      paragraph: 1,
      text: [],
      textToCopy: '',
      language: 'en',
      hash: 'home'
    }
    this.changeParagraphs = this.changeParagraphs.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  componentDidMount() {
    let initialLang;
    if(window.location.hostname === 'feminipsum.org'){
        initialLang = 'en'
    } else if(window.location.hostname === 'feminipsum.com.br'){
        initialLang = 'pt-br'
    } else{
      initialLang = this.state.language;
    }

    this.setLanguage(initialLang);

    window.onhashchange = e => {
      this.setState({hash: window.location.hash.replace('#','')});
      if(this.state.hash === 'about'){
        document.getElementsByTagName( 'html' )[0].classList.add('overflow-hidden');
      }
      else{
        document.getElementsByTagName( 'html' )[0].classList.remove('overflow-hidden');
      }
    }

    this.showText();
  }

  setLanguage(e){
    let lang = this.state.language;
    if(typeof e != "undefined"){
      lang = e
    }
    window.document.documentElement.lang = localizeSite.localize[lang].htmlLang;
    document.title = localizeSite.localize[lang].htmlTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", localizeSite.localize[lang].metaDescription);
    document.querySelector('meta[name="keywords"]').setAttribute("content", localizeSite.localize[lang].metaKeywords);
    document.querySelector('meta[name="language"]').setAttribute("content", lang);
    document.querySelector('meta[property="og:title"]').setAttribute("content", localizeSite.localize[lang].htmlTitle);
    document.querySelector('meta[property="og:description"]').setAttribute("content", localizeSite.localize[lang].metaDescription);
    document.querySelector('meta[property="twitter:title"]').setAttribute("content", localizeSite.localize[lang].htmlTitle);
    document.querySelector('meta[property="twitter:description"]').setAttribute("content", localizeSite.localize[lang].metaDescription);
    this.setState({
      language: lang
    }, this.changeParagraphs(this.state.paragraph));
  }

  showText(){
    let index = 0;
    let localizedFeminipsumData = feminipsumData[this.state.language];
    let copy = '';

    for(let i = 0; i < this.state.paragraph; i++ ) {
      copy += localizedFeminipsumData[index]+' ';
      this.state.text.push(localizedFeminipsumData[index]);
      index++;
      if(index === localizedFeminipsumData.length){
        index = 0;
      }
    }

    this.setState({
      textToCopy: copy
    });
    
    ReactDOM.render(
      <React.StrictMode>
        {this.state.text.map((text,index) => <p key={index}>{text}</p>)}
        <textarea id="textToCopy" name="hide" className="d-none" defaultValue={this.state.text.map((text) => text)}></textarea>
      </React.StrictMode>,
      document.getElementById('renderText')
    );
  }

  changeParagraphs(number){
    this.setState({
      paragraph: number, text: []
    }, this.showText);
  }

  render(){
    return(
      <main className="container-fluid px-0 px-md-3">
        <Header aboutTitle={localizeSite.localize[this.state.language].aboutTitle} closeAboutTitle={localizeSite.localize[this.state.language].closeAboutTitle} aboutText={localizeSite.localize[this.state.language].aboutText} languages={localizeSite.languages} value={this.state.language} onClick={this.setLanguage} hashChange={this.state.hash}/>
        <article className="container feminipsum-content">
          <section id="home" className="row">
            <div className="home col-sm-12 d-flex">
              <div className="position-relative w-100 my-auto text-center">
                <picture>
                  <source srcSet={feminipsumLogoDesk} media="(min-width: 768px)" />
                  <source srcSet={feminipsumLogoMob} media="(max-width: 767px)" />
                  <img className="logo img-fluid w-100" src={feminipsumLogoDesk} alt="FEMINIPSUM" />
                </picture>
              </div>
            </div>
          </section>
          <About aboutText={localizeSite.localize[this.state.language].aboutText} />
          <section id="textGenerator" className="row">
            <div className="col-sm-12 position-relative textGenerator">
              <ChangeParagraphs type="hidden" value={this.state.paragraph} onChange={this.changeParagraphs} title={localizeSite.localize[this.state.language].textGeneratorTitle} />
              <RenderText />
              <CopyToClipboard title={localizeSite.localize[this.state.language].textGeneratorCopyTitle} textToCopy={this.state.textToCopy} />
            </div>
          </section>
        </article>
        <Footer footerText={localizeSite.localize[this.state.language].footerText} />
      </main>
    )
  }
}

export default App;