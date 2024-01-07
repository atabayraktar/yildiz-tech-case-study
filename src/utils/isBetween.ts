//checks whether a value is between two values
export default function isBetween(number: number, min: number, max: number) {
  return number >= min && number <= max;
}
