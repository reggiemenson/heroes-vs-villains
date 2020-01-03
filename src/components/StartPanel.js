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
      <section className="hero is-fullheight fade-in" id="main-hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="title main-title"> <div className="move-hero">Heroes</div><div className="versus">VS</div><div className="move-villain">Villains</div></div>
            <div className="start-game">
              <button className="button light" onClick={(e) => this.whatsYourPath(e.target.value)} value='heroes'>Light-Side</button>
              <button className="button dark" onClick={(e) => this.whatsYourPath(e.target.value)} value='villains'>Dark-Side</button>
              <div>
                {this.state.playerCharacters[0] ? <Link className="opening-text"
                  to={{
                    pathname: '/game',
                    state: {
                      playerCharacters: this.state.playerCharacters,
                      compCharacters: this.state.compCharacters
                    }
                  }}
                >Test Link</Link> : <div className="opening-text">What's your choice?</div>}
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default StartPanel