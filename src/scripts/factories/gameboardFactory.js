/* eslint-disable no-else-return */
export default function gameboardFactory(size) {
  // Handles if size arg is not a number or is not greater than 0, while still allowing the factory to be called without any parameter passed in
  if ((typeof size !== 'number' && size !== undefined) || size <= 0) {
    throw new Error('Gameboard size must be a number greater than 0');
  }

  const createBoard = () => {
    let totalCells;
    // Insert error to limit board size?
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

  /*
  creates an array of the indices that make up the right-most edge of the board, to be utilized for checking placement validity
  */
  const createEdgeArray = () => {
    const edgeArray = [];
    for (let i = 1; i <= size; i++) {
      edgeArray.push(i * size - 1);
    }

    return edgeArray;
  };

  const board = createBoard();
  const boardRightEdge = createEdgeArray();
  const getBoard = () => board;

  let placeHorizontal = true;
  const changePlacementDirection = () => {
    placeHorizontal = !placeHorizontal;
  };

  const createCoordinateArray = (startPosition, ship) => {
    const length = ship.getLength();
    const coordinateArray = [];

    for (let i = 0; i < length; i++) {
      if (placeHorizontal) {
        coordinateArray.push(startPosition + i);
      } else {
        coordinateArray.push(startPosition + i * size);
      }
    }

    return coordinateArray;
  };

  const checkPlacementValidity = (coordinateArray) => {
    const hasCollision = coordinateArray.some((coordinate, index) => {
      if (boardRightEdge.includes(coordinate) && placeHorizontal) {
        return index !== coordinateArray.length - 1;
      } else if (board[coordinate]) {
        return board[coordinate].ship;
      }

      // handles ships that would overflow the last row of the board
      return !board[coordinate];
    });

    if (hasCollision) {
      return false;
    }
    return true;
  };

  const placeShip = (startPosition, ship) => {
    const shipCoordinates = createCoordinateArray(startPosition, ship);

    if (checkPlacementValidity(shipCoordinates)) {
      shipCoordinates.forEach((coordinate) => {
        board[coordinate] = { ship, attacked: false };
      });
    }
  };

  return { getBoard, changePlacementDirection, placeShip };
}
