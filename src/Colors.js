import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    input: PropTypes.string
  }

  state = {
    color: '000'
  }

  toggleColor = () => {
    if (this.state.color === '000') {
      const index=Math.round(Math.random())
      this.setState({ color: this.props.colors[index] });
    } else {
      this.setState({ color: '000' });
    }
  }
  render() {
    const { color } = this.state

    return (
      <div>
        <button style={{ background: `#${color}` }} onClick={this.toggleColor}>
        {this.props.input}
        </button>
      </div>
    )
  }
}