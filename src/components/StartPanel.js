import React from 'react'


class StartPanel extends React.Component {

  render() {
    return (
      <div>
        <h1>Hero-Villain Combat</h1>
        <button onClick={(e) => this.props.whatsYourPath(e.target.value)} value='heroes'>Light-Side</button>
        <button onClick={(e) => this.props.whatsYourPath(e.target.value)} value='villains'>Dark-Side</button>
      </div>
    )
  }
}

export default StartPanel