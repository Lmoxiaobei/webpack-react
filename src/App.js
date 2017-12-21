import React from 'react'

class App extends React.Component {
  state = {
    num:10
  }
  render () {
        return(
          <div>{this.state.num}</div>
        )
  }
}

export default App;
