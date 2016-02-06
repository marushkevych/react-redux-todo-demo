// Input.js

import React from 'react'
import TextDisplay from './TextDisplay'

var Input = React.createClass({

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  },

  getInitialState(){
    return {
      text: 'initial text'
    }
  },

	render(){
    return (
      <form>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <TextDisplay text={this.state.text}/>
      </form>
    )
  }
  
  
});

module.exports = Input;
