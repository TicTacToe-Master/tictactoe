import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  boardSize: number = 3; // Size of the board 3X3 or change to 4X4 ...
  board: string[][] = [];
  userPlayer: string | null = null;
  computerPlayer: string | null = null;

  isComputerPlaying: boolean = false;
  winner: string | null = null;
  chooseXOPage: boolean = true;
  isDraw: boolean = false;

  computerPoint: number = 0;
  userPoint: number = 0;

  ngOnInit(): void {
    this.initializeBoard();
  }

  getBoardSizeCss() {
    return `repeat(${this.boardSize}, 1fr)`;
  }

  getBoardWidth(){
    if(this.boardSize == 3){
      return '400px';
    }else if (this.boardSize == 4){
      return '600px';
    }
    return 'auto';
  }

  // Initialize the board array
  initializeBoard(): void {
    this.board = [];
    for (let i = 0; i < this.boardSize; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push('');
      }
      this.board.push(row);
    }
  }

  async play(row: number, col: number): Promise<void> {
    if (!this.board[row][col] && !this.winner && this.userPlayer && !this.isComputerPlaying) {
      this.board[row][col] = this.userPlayer;

      if (this.checkWinner()) {
        this.winner = this.userPlayer;
        this.userPoint += 1;
      } else if (this.isBoardFull()) {
        this.handleDraw();
      } else {
        if (this.computerPlayer && !this.winner) {
          this.isComputerPlaying = true;
          await this.sleep(1000);
          this.computerPlacement();
          this.isComputerPlaying = false;
        }
      }
    }
  }

  // Put a X or a O at and random position on the board
  computerPlacement() {
    let rowRandomNumber: number;
    let colRandomNumber: number;

    while (true) {
      rowRandomNumber = Math.floor(Math.random() * this.boardSize);
      colRandomNumber = Math.floor(Math.random() * this.boardSize);

      if (!this.board[rowRandomNumber][colRandomNumber]) {
        break;
      }
    }

    if (this.computerPlayer) {
      this.board[rowRandomNumber][colRandomNumber] = this.computerPlayer;
    }

    if (this.checkWinner()) {
      this.winner = this.computerPlayer;
      this.computerPoint += 1;
    } else if (this.isBoardFull()) {
      this.handleDraw();
    }
  }

  checkWinner(): boolean {
    // Check rows
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board[i].every(cell => cell && cell === this.board[i][0])) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.every(row => row[i] && row[i] === this.board[0][i])) {
        return true;
      }
    }

    // Check main diagonal (from the top)
    if (this.board.every((row, index) => row[index] && row[index] === this.board[0][0])) {
      return true;
    }

    // Check secondary diagonal (from the bottom)
    if (this.board.every((row, index) => row[this.boardSize - index - 1] && row[this.boardSize - index - 1] === this.board[0][this.boardSize - 1])) {
      return true;
    }

    return false;
  }

  // Check if the board is full to stop the game
  isBoardFull(): boolean {
    return this.board.every(row => row.every(cell => cell !== ''));
  }

  // Called if the board is full and nobody win
  handleDraw(): void {
    this.isDraw = true;
    this.winner = null;
  }

  resetGame(): void {
    this.initializeBoard();
    this.winner = null;
    this.isDraw = false;
  }

  // Simulate the computer "thinking" before making a move
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  asignPlayer(playerValue: string): void {
    if (playerValue === "X" || playerValue === "O") {
      this.userPlayer = playerValue;
      this.computerPlayer = playerValue === "X" ? "O" : "X";
      this.chooseXOPage = false;
    }
  }

  // X or O from choose-XO Component
  getUserChoice($event: string): void {
    this.asignPlayer($event);
  }

  homeBtnClick() {
    this.resetGame();
    this.userPlayer = null;
    this.computerPlayer = null;
    this.chooseXOPage = true;
  }

}
