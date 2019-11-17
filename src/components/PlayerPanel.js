import React from 'react'


class PlayerPanel extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.pName}</h1>
        <div className={`player-image ${this.props.pSide}`}>
          <img src={this.props.pImage} height='300px' width='300px'></img>
        </div>
        <div className={`player-info ${this.props.pSide}`}>Some Info</div>
      </div>
    )
  }
}

export default PlayerPanel


// <div className={'player-fighter'}>
//   <h1>Your Fighter!</h1>
//   <div className={'player-image'}>
//     <img src=''></img>
//   </div>
//   <div className={'player-info'}>Some Info</div>
// </div>
