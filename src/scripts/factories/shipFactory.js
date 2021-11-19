export default function shipFactory(shipLength) {
  if (!shipLength || shipLength < 0 || typeof shipLength !== 'number') {
    throw new Error('Ship length must be a number greater than 0');
  }

  let hits = [];
  const getLength = () => shipLength;

  const markHit = (position) => {
    if (position < 0 || typeof position !== 'number') {
      throw new Error(
        'Position to hit must be a number greater than or equal to 0'
      );
    }

    const hitsArrayCopy = hits.map((hit) => hit);
    hits = [...hitsArrayCopy, position];
  };

  const isSunk = () => {
    return hits.length === shipLength;
  };

  return { markHit, isSunk, getLength };
}
