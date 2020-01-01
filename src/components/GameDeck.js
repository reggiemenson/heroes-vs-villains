import React from 'react'

import '../style.scss'

let playableCharacters = []
let otherCharacters = []
let capturedOpponents = []
let playerMantle = []
let capturedPlayers = []
let compMantle = []
let winsInRow = 0
let playerWinners = []
let winnerVariable = []


class GameDeck extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playersTeam: [],
      compsTeam: [],
      playerWinners: [],
      playerChoice: 'Player choice',
      computerChoice: 'Computer choice',
      result: 'Choose your weapon!',
      playerCharacters: [],
      compCharacters: [],
      playerFighter: {
        name: 'Your fighter',
        biography: {
          alignment: 'neutral'
        },
        images: {
          md: 'images/fighter-icon-24.jpg'
        }
      },
      compFighter: {
        name: 'Opponent',
        biography: {
          alignment: 'neutral'
        },
        images: {
          md: 'images/boxe-512.png'
        }
      },
      playerMantle: [],
      compMantle: []
    }
  }

  componentDidMount() {
    playableCharacters = this.props.location.state.playerCharacters
    otherCharacters = this.props.location.state.compCharacters
    this.setState({
      playerCharacters: playableCharacters,
      compCharacters: otherCharacters,
      playersTeam: playableCharacters,
      compsTeam: otherCharacters,
      playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
      compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
    })
  }

  penaltyTaker() {
    this.setState({
      playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
      compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
    })
    playableCharacters = this.state.playerCharacters.filter((fighters) => {
      return fighters.name !== this.state.playerFighter.name
    })
    otherCharacters = this.state.compCharacters.filter((fighters) => {
      return fighters.name !== this.state.compFighter.name
    })
    this.setState({
      playerCharacters: playableCharacters,
      compCharacters: otherCharacters
    })
  }

  smirkGang() {
    playerMantle = capturedOpponents.map((winner, i) => {
      return (<div key={i}>
        <img src={winner.images.xs}></img>
      </div>)
    })
    compMantle = capturedPlayers.map((winner, i) => {
      return (<div key={i}>
        <img src={winner.images.xs}></img>
      </div>)
    })
    playerWinners = winnerVariable.map((rowWinner, i) => {
      return (<div key={i}>
        <img src={rowWinner.images.xs}></img>
      </div>)
    })
    this.setState({
      playerMantle,
      compMantle,
      playerWinners
    })
  }

  and1() {
    capturedOpponents.push(this.state.compFighter)
    setTimeout(function () {
      this.setState({
        compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
      })
      otherCharacters = this.state.compCharacters.filter((fighters) => {
        return fighters.name !== this.state.compFighter.name
      })
      this.setState({
        compCharacters: otherCharacters
      })
      // console.log('running')
    }.bind(this), 1000)
  }

  damn() {
    capturedPlayers.push(this.state.playerFighter)
    setTimeout(function () {
      this.setState({
        playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)]
      })
      playableCharacters = this.state.playerCharacters.filter((fighters) => {
        return fighters.name !== this.state.playerFighter.name
      })
      this.setState({
        playerCharacters: playableCharacters
      })
      // console.log('running')
    }.bind(this), 1000)
  }

  listWinners() {
    winnerVariable.push(this.state.playerFighter)
    playerWinners = winnerVariable.map((rowWinner, i) => {
      return (
        <img key={i} src={rowWinner.images.xs}></img>
      )
    })

  }

  whosNext() {
    setTimeout(function () {
      this.setState({
        playerFighter: playableCharacters[Math.floor(Math.random() * playableCharacters.length)],
        compFighter: otherCharacters[Math.floor(Math.random() * otherCharacters.length)]
      })
      playableCharacters = this.state.playerCharacters.filter((fighters) => {
        return fighters.name !== this.state.playerFighter.name
      })
      otherCharacters = this.state.compCharacters.filter((fighters) => {
        return fighters.name !== this.state.compFighter.name
      })
      this.setState({
        playerCharacters: playableCharacters,
        compCharacters: otherCharacters
      })
      // console.log('running')
    }.bind(this), 1000)
  }

  iChooseYou(choice) {
    let result = ''
    this.setState({
      playerChoice: choice
    })
    setTimeout(function () {
      this.whatYouGot()
      result = this.whoWins()
      if (result === 'You win!') {
        winsInRow += 1
        this.and1()
        // this.whosNext()
        //if there's a winner pop it from playable characters and regenerate main for both players
      } else if (result === 'You lose!') {
        if (winsInRow > 0) {
          this.listWinners(winsInRow)
          this.damn()
          winsInRow = 0
        } else {
          this.damn()
        }
        // this.whosNext()
        //if there's a loser pop it from playable characters and regenerate main for both players
      }
      this.smirkGang()
      // console.log(this.state.playerCharacters)
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
    return (<div className='main-deck columns'>
      {console.log(this.state.playerWinners)}
      <div className="column">
        <div className="scoring">
          <div>
            <div className="play-score">
              {this.state.playerMantle.map((member, i) => {
                return (<div key={i}>{member}</div>)
              })}
            </div>
            <p>{`Player Score ${this.state.playerMantle.length}`}</p>
          </div>
          <div>
            <div className="comp-score">
              {this.state.compMantle.map((member, i) => {
                return (<div key={i}>{member}</div>)
              })}
            </div>
            <p>{`Opponent Score ${this.state.compMantle.length}`}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1>{this.state.playerFighter.name}</h1>
            <div className={`player-image ${this.state.playerFighter.biography.alignment}`}>
              <img src={this.state.playerFighter.images.md} height='300px' width='300px'></img>
            </div>
            <div className={`player-info ${this.state.playerFighter.biography.alignment}`}>Some Info</div>
          </div>
          <div className="column game-panel">
            <div className="game-buttons">
              <div>
                <p>Player 1 chose: <span>{this.state.playerChoice}</span></p>
                <p>Player 2 chose: <span>{this.state.computerChoice}</span></p>
                <p className={'result'}>{this.state.result}</p>
                <button onClick={(e) => this.iChooseYou(e.target.innerHTML)}>rock</button>
                <button onClick={(e) => this.iChooseYou(e.target.innerHTML)}>paper</button>
                <button onClick={(e) => this.iChooseYou(e.target.innerHTML)}>scissors</button>
                <button onClick={() => this.doOver()}>reset</button>
              </div>
            </div>
          </div>
          <div className="column">
            <h1>{this.state.compFighter.name}</h1>
            <div className={`player-image ${this.state.compFighter.biography.alignment}`}>
              <img src={this.state.compFighter.images.md} height='300px' width='300px'></img>
            </div>
            <div className={`player-info ${this.state.compFighter.biography.alignment}`}>Some Info</div>
          </div>
        </div>
        <div className="column">
          <div className="winners">
            {this.state.playerWinners.map((member, i) => {
              return (<div className="winners" key={i}>{member}</div>)
            })}
          </div>
        </div>
      </div>
    </div>)
  }
}

export default GameDeck
