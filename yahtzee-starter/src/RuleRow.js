import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      <tr className={(this.props.score === undefined ? 'RuleRow RuleRow-active' : 'RuleRow RuleRow-disabled')}
          onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        {
          this.props.score === undefined 
          ? <td>{this.props.description}</td>
          : <td className="RuleRow-score">{this.props.score}</td>
        }
      </tr>
    )
  }
}

export default RuleRow;
