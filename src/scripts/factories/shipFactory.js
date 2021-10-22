export default function shipFactory(shipLength) {
  if (!shipLength || shipLength < 0 || typeof shipLength !== 'number') {
    throw new Error('Ship length must be a number greater than 0');
  }

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
    if (position < 0 || typeof position !== 'number') {
      throw new Error('Position must be a number greater than or equal to 0');
    }

    const hitsCopy = hits.map((hit, index) => {
      let newHit = hit;
      if (position === index && !newHit) {
        newHit = true;
      }
      return newHit;
    });

    hits = [...hitsCopy];
  };

  const isSunk = () => {
    return hits.every((hit) => hit === true);
  };

  return { markHit, isSunk, getLength };
}
