import React from 'react'
import ReactDOM from 'react-dom'

import GameDeck from './components/GameDeck'
import StartPanel from './components/StartPanel'
import PlayerPanel from './components/PlayerPanel'

// let side = ''
// let compSide = ''
let playableCharacters = []
let otherCharacters = []

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerChoice: 'Player choice',
      computerChoice: 'Computer choice',
      result: 'Choose your weapon!',
      supes: [],
      playerCharacters: [],
      compCharacters: [],
      playerFighter: null,
      compFighter: null
    },
    this.iChooseYou = this.iChooseYou.bind(this)
    this.doOver = this.doOver.bind(this)
    this.whatsYourPath = this.whatsYourPath.bind(this)
  }

  componentDidMount() {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then(resp => resp.json())
      .then(resp => this.setState({ supes: resp }))
    // this.selfAbsorbedRating()
  }

  whatsYourPath(side) {
    if (side === 'heroes') {
      playableCharacters = this.selfAbsorbedRating('good')
      otherCharacters = this.selfAbsorbedRating('bad')
    } else {
      playableCharacters = this.selfAbsorbedRating('bad')
      otherCharacters = this.selfAbsorbedRating('good')
    }
    this.setState({
      playerCharacters: playableCharacters,
      compCharacters: otherCharacters
      // playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
      // compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
    })
    console.log(this.state.playerCharacters)
    this.penaltyTaker()
  }

  penaltyTaker() {
    this.setState({
      playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
      compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
    })
    fighterName.innerHTML = `${this.state.playerFighter.name}`
    console.log(this.state.playerFighter)
  }

  selfAbsorbedRating(shade) {
    const re = new RegExp(shade, 'i')
    return this.state.supes.filter(supes => {
      return re.test(supes.biography.alignment)
    })
  }

  iChooseYou(choice) {
    let result = ''
    this.setState({
      playerChoice: choice
    })
    console.log(choice)
    setTimeout(function () {
      this.whatYouGot()
      result = this.whoWins()
      console.log(this.whoWins())
      this.setState({
        result
      })
    }.bind(this), 2000)
  }

  whatYouGot() {
    const choices = ['rock', 'paper', 'scissors']
    const throwDown = choices[Math.round(Math.random() * 2)]
    this.setState({
      computerChoice: throwDown
    })
  }

  whoWins() {
    if (this.state.playerChoice !== this.state.computerChoice) {
      switch (this.state.playerChoice) {
        case 'rock':
          return this.state.computerChoice === 'paper' ? 'You lose!' : 'You win!'
        case 'scissors':
          return this.state.computerChoice === 'rock' ? 'You lose!' : 'You win!'
        case 'paper':
          return this.state.computerChoice === 'scissors' ? 'You lose!' : 'You win!'
      }
    } else return 'It\'s a draw!'
  }

  doOver() {
    this.setState({
      playerChoice: 'Player choice',
      computerChoice: 'Computer choice',
      result: 'Choose your weapon!'
    })
  }

  render() {
    // console.log(this.state.supes)
    return (
      <div>
        <StartPanel
          whatsYourPath={this.whatsYourPath}
        />
        <PlayerPanel />
        <GameDeck
          pChoice={this.state.playerChoice}
          cChoice={this.state.computerChoice}
          result={this.state.result}
          iChooseYou={this.iChooseYou}
          doOver={this.doOver}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)