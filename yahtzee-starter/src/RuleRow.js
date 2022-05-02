import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, doScore, name, description } = this.props;
    return (
      <tr className={`RuleRow RuleRow-${
        score === undefined ? 'active' : 'disabled'
      }`}
          onClick={doScore}>
        <td className="RuleRow-name">{name}</td>
        {
          score === undefined 
          ? <td>{description}</td>
          : <td className="RuleRow-score">{score}</td>
        }
      </tr>
    )
  }
}

export default RuleRow;
