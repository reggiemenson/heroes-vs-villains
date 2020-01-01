import React from 'react'
import { Link } from 'react-router-dom'

import 'bulma'


let playableCharacters = []
let otherCharacters = []

class StartPanel extends React.Component {

  constructor() {
    super()
    this.state = {
      supes: [],
      playerCharacters: [],
      compCharacters: []
    }
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
  }


  render() {
    return (
      <section className="hero is-fullheight" id="main-hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title main-title">Heroes VS Villains</h1>
            <button className="button" onClick={(e) => this.whatsYourPath(e.target.value)} value='heroes'>Light-Side</button>
            <button className="button" onClick={(e) => this.whatsYourPath(e.target.value)} value='villains'>Dark-Side</button>
            <div>
              {this.state.playerCharacters[0] ? <Link className='test-item'
                to={{
                  pathname: '/game',
                  state: {
                    playerCharacters: this.state.playerCharacters,
                    compCharacters: this.state.compCharacters
                  }
                }}
              >Test Link</Link> : 'What\'s your choice?'}
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default StartPanel