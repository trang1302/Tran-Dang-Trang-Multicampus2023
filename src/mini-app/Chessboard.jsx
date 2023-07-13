import { useState } from "react";
import "./Chessboard.css";
import { Space } from "antd";

function Chessboard() {
  let [size, setSize] = useState(8);
  let board = [];
  let N = size;
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      let cell = (i + j) % 2 ? "white" : "black";
      row.push(cell);
    }
    board.push(row);
  }

  return (
    <Space direction="vertical">
      <div>Chessboard</div>
      <div className="chess-board">
        <label>Size:</label>
        <Space>
          <input
            type="text"
            onChange={(e) => {
              setSize(e.target.value);
            }}
            value={size}
          ></input>
        </Space>
      </div>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={"cell " + cell}></div>
            ))}
          </div>
        ))}
      </div>
    </Space>
  );
}
export default Chessboard;
