import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Componemts/Quote';
import Quotes from './Componemts/Quotes'
import Lamp from './Componemts/Lamp'
import DisplayQuotes from './Componemts/DisplayQuotes'
import GenerateQuotes from './Componemts/GenerateQuotes'

const ex =
{
  quote: "Le vol à l'étalage est un crime sans victime, c'est comme frapper quelqu'un dans le noir.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left"
}
class App extends Component {

  state = {
    working: true,
    person: ex

  }
  getQuotes() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data =>{ console.log(data)
       this.setState({
         person: data[0],
        })
      })
    }
  handleClick = () => {
    this.setState({ working: !this.state.working })
  }
  

  


  render() {
    const logoSpin = this.state.working ? 'App-logo' : 'App-logo-fast'
    const buttonState = this.state.working ? 'il fait trop chaud pour travailler' : 'allez je suis chaud patate'
    const homerState = this.state.working ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSS0XoTTotYR8KL9Xpa8iEV8g1ouMlmQM-av_strKiMF5McAK' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxJLgwWg1R-FO6PeSCo-OqhFQpwgpixklYOthG749gsEOHUqq'
    return (
      <div className="App">
     <header className="App-header">
          <img src={logo} className={logoSpin} alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
        <button onClick={this.handleClick}
        >{buttonState}
        </button>
        <div className='homer'>
          <img src={homerState} alt="homer at work" />
    </div>
        <GenerateQuotes selectQuotes={() => this.getQuotes()} />
        <DisplayQuotes person={this.state.person} />
      <Lamp />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Quotes />
      </div>
    );
  }
}


export default App;
