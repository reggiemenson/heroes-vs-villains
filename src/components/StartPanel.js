import React from 'react'
import { Link } from 'react-router-dom'


let playableCharacters = []
let otherCharacters = []

class StartPanel extends React.Component {

  constructor() {
    super()
    this.state = {
      // playerChoice: 'Player choice',
      // computerChoice: 'Computer choice',
      // result: 'Choose your weapon!',
      supes: [],
      playerCharacters: [],
      compCharacters: []
      // playerFighter: {
      //   name: 'Your fighter',
      //   biography: {
      //     alignment: 'neutral'
      //   },
      //   images: {
      //     md: 'images/fighter-icon-24.jpg'
      //   }
      // },
      // compFighter: {
      //   name: 'Opponent',
      //   biography: {
      //     alignment: 'neutral'
      //   },
      //   images: {
      //     md: 'images/boxe-512.png'
      //   }
      // },
      // playerMantle: [],
      //   compMantle: []
    }
    // this.iChooseYou = this.iChooseYou.bind(this)
    // this.doOver = this.doOver.bind(this)
    // this.whatsYourPath = this.whatsYourPath.bind(this)
  }

  componentDidMount() {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then(resp => resp.json())
      .then(resp => this.setState({ supes: resp }))
  }

  selfAbsorbedRating(shade) {
    const re = new RegExp(shade, 'i')
    return this.state.supes.filter(supes => {
      return re.test(supes.biography.alignment)
    })
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
    })
    // setTimeout(function () {
    //   this.penaltyTaker()
    // }.bind(this), 2000)
  }


  render() {
    return (
      <div>
        <h1>Hero-Villain Combat</h1>
        <button onClick={(e) => this.whatsYourPath(e.target.value)} value='heroes'>Light-Side</button>
        <button onClick={(e) => this.whatsYourPath(e.target.value)} value='villains'>Dark-Side</button>
        <Link className='test-item' to={{
          pathname: '/game',
          state: {
            playerCharacters: this.state.playerCharacters,
            compCharacters: this.state.compCharacters
          }
        }} >Test Link</Link>
      </div>
    )
  }
}

export default StartPanel