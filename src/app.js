import React from 'react'
import ReactDOM from 'react-dom'

// import 'bulma'
// import 'style.scss'

import GameDeck from './components/GameDeck'
import StartPanel from './components/StartPanel'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// let playableCharacters = []
// let otherCharacters = []
// let playerWinners = []
// let playerMantle = []
// let compWinners = []
// let compMantle = []


class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     playerChoice: 'Player choice',
  //     computerChoice: 'Computer choice',
  //     result: 'Choose your weapon!',
  //     supes: [],
  //     playerCharacters: [],
  //     compCharacters: [],
  //     playerFighter: {
  //       name: 'Your fighter',
  //       biography: {
  //         alignment: 'neutral'
  //       },
  //       images: {
  //         md: 'images/fighter-icon-24.jpg'
  //       }
  //     },
  //     compFighter: {
  //       name: 'Opponent',
  //       biography: {
  //         alignment: 'neutral'
  //       },
  //       images: {
  //         md: 'images/boxe-512.png'
  //       }
  //     },
  //     playerMantle: [],
  //     compMantle: []
  //   },
  //     this.iChooseYou = this.iChooseYou.bind(this)
  //   this.doOver = this.doOver.bind(this)
  //   this.whatsYourPath = this.whatsYourPath.bind(this)
  // }

  // componentDidMount() {
  //   fetch('https://akabab.github.io/superhero-api/api/all.json')
  //     .then(resp => resp.json())
  //     .then(resp => this.setState({ supes: resp }))
  // }

  // whatsYourPath(side) {
  //   if (side === 'heroes') {
  //     playableCharacters = this.selfAbsorbedRating('good')
  //     otherCharacters = this.selfAbsorbedRating('bad')
  //   } else {
  //     playableCharacters = this.selfAbsorbedRating('bad')
  //     otherCharacters = this.selfAbsorbedRating('good')
  //   }
  //   this.setState({
  //     playerCharacters: playableCharacters,
  //     compCharacters: otherCharacters
  //     // playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
  //     // compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
  //   })
  //   // console.log(this.state.playerCharacters) Make sense that this doesnt console log on first call. It takes time.
  //   setTimeout(function () {
  //     this.penaltyTaker()
  //   }.bind(this), 2000)
  // }

  // penaltyTaker() {
  //   this.setState({
  //     playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
  //     compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
  //   })
  //   playableCharacters = this.state.playerCharacters.filter((fighters) => {
  //     return fighters.name !== this.state.playerFighter.name
  //   })
  //   otherCharacters = this.state.compCharacters.filter((fighters) => {
  //     return fighters.name !== this.state.compFighter.name
  //   })
  //   this.setState({
  //     // playerPanel,
  //     // compPanel,
  //     playerCharacters: playableCharacters,
  //     compCharacters: otherCharacters
  //   })
  // }

  // selfAbsorbedRating(shade) {
  //   const re = new RegExp(shade, 'i')
  //   return this.state.supes.filter(supes => {
  //     return re.test(supes.biography.alignment)
  //   })
  // }

  // smirkGang() {
  //   playerMantle = playerWinners.map((winner, i) => {
  //     return (<div key={i}>
  //       <img src={winner.images.xs}></img>
  //       {/* <p>{`Score ${this.state.playerMantle.length}`}</p> */}
  //     </div>)
  //   })
  //   compMantle = compWinners.map((winner, i) => {
  //     return (<div key={i}>
  //       <img src={winner.images.xs}></img>
  //       {/* <p>{`Score ${this.state.compMantle.length}`}</p> */}
  //     </div>)
  //   })
  //   this.setState({
  //     playerMantle,
  //     compMantle
  //   })
  // }

  // and1() {
  //   playerWinners.push(this.state.playerFighter)
  // }



  // damn() {
  //   compWinners.push(this.state.compFighter)
  // }

  // whosNext() {
  //   setTimeout(function () {
  //     this.setState({
  //       playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
  //       compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
  //     })
  //     playableCharacters = this.state.playerCharacters.filter((fighters) => {
  //       return fighters.name !== this.state.playerFighter.name
  //     })
  //     otherCharacters = this.state.compCharacters.filter((fighters) => {
  //       return fighters.name !== this.state.compFighter.name
  //     })
  //     this.setState({
  //       // playerPanel,
  //       // compPanel,
  //       playerCharacters: playableCharacters,
  //       compCharacters: otherCharacters
  //     })
  //     console.log('running')
  //   }.bind(this), 1000)
  // }

  // iChooseYou(choice) {
  //   let result = ''
  //   this.setState({
  //     playerChoice: choice
  //   })


  //   // console.log(choice)
  //   setTimeout(function () {
  //     this.whatYouGot()
  //     result = this.whoWins()
  //     if (result === 'You win!') {
  //       this.and1()
  //       this.whosNext()
  //       //if there's a winner pop it from playable characters and regenerate main for both players
  //     } else if (result === 'You lose!') {
  //       this.damn()
  //       this.whosNext()
  //       //if there's a loser pop it from playable characters and regenerate main for both players
  //     }
  //     this.smirkGang()
  //     console.log(this.state.playerCharacters)
  //     this.setState({
  //       result
  //     })
  //   }.bind(this), 2000)
  // }

  // whatYouGot() {
  //   const choices = ['rock', 'paper', 'scissors']
  //   const throwDown = choices[Math.round(Math.random() * 2)]
  //   this.setState({
  //     computerChoice: throwDown
  //   })
  // }

  // whoWins() {
  //   if (this.state.playerChoice !== this.state.computerChoice) {
  //     switch (this.state.playerChoice) {
  //       case 'rock':
  //         return this.state.computerChoice === 'paper' ? 'You lose!' : 'You win!'
  //       case 'scissors':
  //         return this.state.computerChoice === 'rock' ? 'You lose!' : 'You win!'
  //       case 'paper':
  //         return this.state.computerChoice === 'scissors' ? 'You lose!' : 'You win!'
  //     }
  //   } else return 'It\'s a draw!'
  // }

  // doOver() {
  //   this.setState({
  //     playerChoice: 'Player choice',
  //     computerChoice: 'Computer choice',
  //     result: 'Choose your weapon!'
  //   })
  // }

  render() {
    // console.log(this.state.supes)
    return (
      <BrowserRouter>
        <Switch>
          {/* <div> */}
          <Route exact path="/" component={StartPanel} />
          <Route path="/game" component={GameDeck} />
          {/* {this.state.playerMantle}
            <p>{`Player Score ${this.state.playerMantle.length}`}</p>
            {this.state.compMantle}
            <p>{`Opponent Score ${this.state.compMantle.length}`}</p> */}
          {/* </div> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// {/* <div> */}
// <StartPanel
// yourPath={(e) => this.whatsYourPath(e)}
// />
// <GameDeck
// pName={this.state.playerFighter.name}
// pSide={this.state.playerFighter.biography.alignment}
// pImage={this.state.playerFighter.images.md}
// pChoice={this.state.playerChoice}
// cChoice={this.state.computerChoice}
// result={this.state.result}
// iChooseYou={this.iChooseYou}
// doOver={this.doOver}
// cName={this.state.compFighter.name}
// cSide={this.state.compFighter.biography.alignment}
// cImage={this.state.compFighter.images.md}
// pTrophyCab={this.state.playerMantle}
// cTrophyCab={this.state.compMantle}
// />
// {/* {this.state.playerMantle}
// <p>{`Player Score ${this.state.playerMantle.length}`}</p>
// {this.state.compMantle}
// <p>{`Opponent Score ${this.state.compMantle.length}`}</p> */}
// {/* </div> */}