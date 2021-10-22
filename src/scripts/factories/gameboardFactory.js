export default function gameboardFactory(size) {
  // Handles if size arg is not a number or is not greater than 0, while still allowing the factory to be called without any parameter passed in
  if ((typeof size !== 'number' && size !== undefined) || size <= 0) {
    throw new Error('Gameboard size must be a number greater than 0');
  }

  const createBoard = () => {
    let totalCells;
    if (size) {
      totalCells = size * size;
    } else {
      totalCells = 100;
    }

    const cellsArray = [];
    for (let i = 0; i < totalCells; i++) {
      cellsArray.push({ ship: null, attacked: false });
    }

    return cellsArray;
  };

  const board = createBoard();
  const getBoard = () => board;

  return { getBoard };
}
