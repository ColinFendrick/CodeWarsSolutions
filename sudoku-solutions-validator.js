const getBlock = (row, column, board) => {
  const array = [];
  for (c = 0; c < 3; c++) {
    for (r = 0; r < 3; r++) {
      array.push(board[row + r][column + c]);
    }
  }

  return array;
}

const validateSection = unsorted => {
  const sorted = unsorted.slice().sort();
  for (let i = 0; i < 9; i++) {
    if (sorted[i] != i + 1) { return false; }
  }

  return true;
}

const validSolution = board => {
  for (let row = 0; row < 9; row++) {
    if (!validateSection(board[row])) { return false; }
  }

  for (let column = 0; column < 9; column++) {
    let columnArray = [];
    for (let row = 0; row < 9; row++) {
      columnArray.push(board[row][column]);
    }
    if (!validateSection(columnArray)) { return false; }
  }

  for (let column = 0; column < 9; column += 3) {
    for (let row = 0; row < 9; row += 3) {
      if (!validateSection(getBlock(row, column, board))) return false;
    }
  }

  return true;
}
