import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	renderSquare(i) {
		return (
			<Square
				key={i}
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}
	render() {
		const divArr = Array(3).fill(null);
		let squareNum = 0;
		return (
				divArr.map((num, i) => {
					return (
						<div key={i} className="board-row">
							{divArr.map((num) => {
								return this.renderSquare(squareNum++);
							})}
						</div>
					);
				})
		);
	}
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null),
				},
			],
			xIsNext: true,
			stepNumber: 0,
		};
	}

	jumpTo(step, event) {
		console.log(event.target.parentElement.parentElement)
		this.setState({
			history: this.state.history.slice(0, this.state.stepNumber + 1),
			stepNumber: step,
			xIsNext: step % 2 === 0,
		});
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[this.state.stepNumber];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) return;
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			history: history.concat([{ squares: squares }]),
			xIsNext: !this.state.xIsNext,
			stepNumber: history.length,
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		let status = winner
			? "Winner " + winner
			: "Next player" + (this.state.xIsNext ? "X" : "O");

		const moves = history.map((step, move) => {
			const desc = move ? `Go to move #${move}` : `Go to game start`;
			return (
				<li key={move}>
					<button onClick={(event) => this.jumpTo(move, event)}>{desc}</button>
				</li>
			);
		});

		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={current.squares}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
