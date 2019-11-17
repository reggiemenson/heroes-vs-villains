import React from 'react'


class CompPanel extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.cName}</h1>
        <div className={`player-image ${this.props.cSide}`}>
          <img src={this.props.cImage} height='300px' width='300px'></img>
        </div>
        <div className={`player-info ${this.props.cSide}`}>Some Info</div>
      </div>
    )
  }
}

export default CompPanel