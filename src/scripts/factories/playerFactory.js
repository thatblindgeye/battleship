export default function playerFactory(name) {
  const getName = () => name;

  return { getName };
}
