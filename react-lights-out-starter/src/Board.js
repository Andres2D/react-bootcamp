import React, {Component} from "react";
import Cell from "./Cell";
import { returState } from './helpers/randomState';
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    changeLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  createBoard() {
    let board = [];
    Array.from({length: this.props.nrows}).map(() => {
      let row = [];
      Array.from({length: this.props.ncols}).map(() => {
        return row.push(returState(this.props.changeLightStartsOn));
      });
      return board.push(row);
    })
    return board
  }

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y,x);
    flipCell(y+1,x);
    flipCell(y-1,x);
    flipCell(y,x+1);
    flipCell(y,x-1);

    this.setState(st => ({
      board,
      hasWon: !board.some( a => a.includes(true))
    }));
  }

  render() {
    return(
      <div>
        <h1>Lights Out</h1>
        <table className="Board">
          <tbody>
            {
              this.state.hasWon
              ?
                <tr>
                  <td>
                    <h1>You Win!!</h1>
                  </td>
                </tr>
              :
                Array.from(this.state.board)
                    .map((row, i) => {
                      return (
                        <tr key={i}>
                          {
                            row.map((opt, j) => {
                              return (
                                <Cell key={`${i}-${j}`} isLit={opt} coord={`${i}-${j}`} flipCellsAround={this.flipCellsAround} />
                              )
                            })
                          }
                        </tr>
                      )
                  })
            }
          </tbody> 
        </table>
      </div>
    );
  }
}

export default Board;
