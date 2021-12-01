import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    bandName: ''
  }

  handleOnChange = (event) => {
    this.setState({
      bandName: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({ bandName: '' })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Enter a Band:
          <input 
            type="text"
            onChange={this.handleOnChange}
            value={this.state.bandName}
            />
        </form>
      </div>
    )
  }
}

export default BandInput;