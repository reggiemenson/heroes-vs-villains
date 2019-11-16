import React from 'react'


class GameDeck extends React.Component {

  render() {
    return (
      <div>
        <p>Player 1 chose: <span>{this.props.pChoice}</span></p>
        <p>Player 2 chose: <span>{this.props.cChoice}</span></p>
        <p className={'result'}>{this.props.result}</p>
        <button onClick={(e) => this.props.iChooseYou(e.target.innerHTML)}>rock</button>
        <button onClick={(e) => this.props.iChooseYou(e.target.innerHTML)}>paper</button>
        <button onClick={(e) => this.props.iChooseYou(e.target.innerHTML)}>scissors</button>
        <button onClick={() => this.props.doOver()}>reset</button>
      </div>
    )
  }
}

export default GameDeck