import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';

class ScoreTable extends Component {

  static defaultProps = {
    ones: '1 point for every 1',
    twos: '2 points for every 2',
    threes: '3 points for every 3',
    fours: '4 points for every 4',
    fives: '5 points for every 5',
    sixes: '6 points for every 6',
    threeOfKind: 'If 3+ of one value, score sum of all dice',
    fourOfKind: 'If 4+ of one value, score sum of all dice',
    fullHouse: 'If 3 of one value and 2 of another, score 25',
    smallStraight: 'If 4+ values in a row, score 30',
    largeStraight: 'If 5 values in a row, score 40',
    yahtzee: 'If all values match, score 50',
    chance: 'Score sum of all dice'
  }

  render() {
    const { scores, doScore } = this.props;
    const score = Object.values(this.props.scores).filter(Number).length > 0 
    ? Object.values(this.props.scores).filter(Number).reduce((prev, curr) => prev + curr)
    : 0;
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} description={this.props.ones} />
              <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} description={this.props.twos} />
              <RuleRow name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} description={this.props.threes} />
              <RuleRow name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} description={this.props.fours} />
              <RuleRow name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} description={this.props.fives} />
              <RuleRow name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} description={this.props.sixes} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} description={this.props.threeOfKind} />
              <RuleRow name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} description={this.props.fourOfKind} />
              <RuleRow name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} description={this.props.fullHouse} />
              <RuleRow name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} description={this.props.smallStraight} />
              <RuleRow name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} description={this.props.largeStraight} />
              <RuleRow name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} description={this.props.yahtzee} />
              <RuleRow name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} description={this.props.chance} />
            </tbody>
          </table>
        </section>
        <section>
          <h2>TOTAL SCORE: {score}</h2>
        </section>
      </div>
    )
  }
}

export default ScoreTable;