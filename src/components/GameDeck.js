import React from 'react'

let playableCharacters = []
let otherCharacters = []
let playerWinners = []
let playerMantle = []
let compWinners = []
let compMantle = []


class GameDeck extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerChoice: 'Player choice',
      computerChoice: 'Computer choice',
      result: 'Choose your weapon!',
      // supes: [],
      // playerCharacters: this.props.playerCharacters,
      // compCharacters: this.props.compCharacters,
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
    // this.iChooseYou = this.iChooseYou.bind(this)
    // this.doOver = this.doOver.bind(this)
    // this.whatsYourPath = this.whatsYourPath.bind(this)
  }

  componentDidMount() {
    const { playerCharacters } = this.props.location.state
    const { compCharacters } = this.props.location.state
  }

  penaltyTaker() {
    this.setState({
      playerFighter: this.playerCharacters[Math.floor(Math.random() * this.playerCharacters.length)],
      compFighter: this.compCharacters[Math.floor(Math.random() * this.compCharacters.length)]
    })
    playableCharacters = this.state.playerCharacters.filter((fighters) => {
      return fighters.name !== this.state.playerFighter.name
    })
    otherCharacters = this.state.compCharacters.filter((fighters) => {
      return fighters.name !== this.state.compFighter.name
    })
    this.setState({
      // playerPanel,
      // compPanel,
      playerCharacters: playableCharacters,
      compCharacters: otherCharacters
    })
  }

  smirkGang() {
    playerMantle = playerWinners.map((winner, i) => {
      return (<div key={i}>
        <img src={winner.images.xs}></img>
        {/* <p>{`Score ${this.state.playerMantle.length}`}</p> */}
      </div>)
    })
    compMantle = compWinners.map((winner, i) => {
      return (<div key={i}>
        <img src={winner.images.xs}></img>
        {/* <p>{`Score ${this.state.compMantle.length}`}</p> */}
      </div>)
    })
    this.setState({
      playerMantle,
      compMantle
    })
  }

  and1() {
    playerWinners.push(this.state.playerFighter)
  }



  damn() {
    compWinners.push(this.state.compFighter)
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
        // playerPanel,
        // compPanel,
        playerCharacters: playableCharacters,
        compCharacters: otherCharacters
      })
      console.log('running')
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
        this.and1()
        this.whosNext()
        //if there's a winner pop it from playable characters and regenerate main for both players
      } else if (result === 'You lose!') {
        this.damn()
        this.whosNext()
        //if there's a loser pop it from playable characters and regenerate main for both players
      }
      this.smirkGang()
      console.log(this.state.playerCharacters)
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
    console.log(this.props.playerCharacters)
    return (<div className='main-deck'>
      <div>
        <h1>{this.state.playerFighter.name}</h1>
        <div className={`player-image ${this.state.playerFighter.biography.alignment}`}>
          <img src={this.state.playerFighter.images.md} height='300px' width='300px'></img>
        </div>
        <div className={`player-info ${this.state.playerFighter.biography.alignment}`}>Some Info</div>
      </div>
      <div>
        <p>Player 1 chose: <span>{this.state.playerChoice}</span></p>
        <p>Player 2 chose: <span>{this.state.computerChoice}</span></p>
        <p className={'result'}>{this.state.result}</p>
        <button onClick={(e) => this.iChooseYou(e.target.innerHTML)}>rock</button>
        <button onClick={(e) => this.iChooseYou(e.target.innerHTML)}>paper</button>
        <button onClick={(e) => this.iChooseYou(e.target.innerHTML)}>scissors</button>
        <button onClick={() => this.doOver()}>reset</button>
      </div>
      <div>
        <h1>{this.state.compFighter.name}</h1>
        <div className={`player-image ${this.state.compFighter.biography.alignment}`}>
          <img src={this.state.compFighter.images.md} height='300px' width='300px'></img>
        </div>
        <div className={`player-info ${this.state.compFighter.biography.alignment}`}>Some Info</div>
      </div>
      {this.state.playerMantle}
      <p>{`Player Score ${this.state.playerMantle.length}`}</p>
      {this.state.compMantle}
      <p>{`Opponent Score ${this.state.compMantle.length}`}</p>
    </div>)
  }
}

export default GameDeck

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