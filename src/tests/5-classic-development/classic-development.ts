type Grid = string[][];
type Moves = number[][];

const GRID_INITIAL_STATE: Grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function ticTacToe(moves: Moves): string {
  const grid = GRID_INITIAL_STATE;

  fillGrid(grid, moves);

  if (isWin(grid, 'A')) return 'Player A won';
  if (isWin(grid, 'B')) return 'Player B won';
  if (isDraw(grid)) return 'Draw';
  return 'Pending';
}

export function fillGrid(grid: Grid, moves: Moves): void {
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    const isEven = !(i % 2);
    const player = isEven ? 'A' : 'B';
    grid[row][col] = player;
  }
}

export function isWin(grid: Grid, player: string): boolean {
  const isRowWin = grid.some(row => row.every(cell => cell === player));
  const isColWin = grid[0].some((_, colIndex) => grid.every(row => row[colIndex] === player));
  const isDiagWin = grid[0][0] === player && grid[1][1] === player && grid[2][2] === player;
  const isAntiDiagWin = grid[0][2] === player && grid[1][1] === player && grid[2][0] === player;

  return isRowWin || isColWin || isDiagWin || isAntiDiagWin;
}

export function isDraw(grid: Grid): boolean {
  return grid.every(row => row.every(cell => cell !== ''));
}

export default ticTacToe;

