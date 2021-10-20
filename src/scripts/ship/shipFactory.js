export default function shipFactory(shipLength) {
  const createHitsArray = () => {
    const hitsArray = [];
    for (let i = 0; i < shipLength; i++) {
      hitsArray.push(false);
    }

    return hitsArray;
  };

  let hits = createHitsArray();
  const getLength = () => hits.length;

  const markHit = (position) => {
    const hitsCopy = [...hits];
    if (!hitsCopy[position]) {
      hitsCopy[position] = true;
      hits = [...hitsCopy];
    }
  };

  const isSunk = () => {
    return hits.every((hit) => hit === true);
  };

  return { markHit, isSunk, getLength };
}
