import React from 'react'
import ReactDOM from 'react-dom'

import Calculator from './components/Calculator'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerChoice: 'Player choice',
      computerChoice: 'Computer choice',
      result: 'Choose your weapon!'
    }
    this.iChooseYou = this.iChooseYou.bind(this)
    this.doOver = this.doOver.bind(this)
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

  doOver(){
    this.setState({
      playerChoice: 'Player choice',
      computerChoice: 'Computer choice',
      result: 'Choose your weapon!'
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Calculator 
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