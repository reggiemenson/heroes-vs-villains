import React from 'react'

const fighterName = document.querySelector('.player-fighter h1')

class PlayerPanel extends React.Component {

  render() {
    return (
      <div className={'player-fighter'}>
        <h1>Your Fighter!</h1>
        <div className={'player-image'}>
          <img src=''></img>
        </div>
        <div className={'player-info'}>Some Info</div>
      </div>
    )
  }
}

export default PlayerPanel

{/* <div>
<h1>{this.props.playerFighter.name}</h1>
<div className={`player-image ${this.props.playerFighter.biography.alignment}`}>
  <img src={this.props.playerFighter.images.lg}></img>
</div>
<div className={`player-info ${this.props.playerFighter.biography.alignment}`}>Some Info</div>
</div> */}
