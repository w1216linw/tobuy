function cupToTbsp(cup) {
  //n * 16
  return cup * 16;
}

function cupToTsp(cup) {
  return cup * 48;
}

function tbspToCup(tbsp) {
  //n / 16
  return tbsp / 16;
}

function tbspToTsp(tbsp) {
  //n * 3
  return tbsp * 3;
}

function tspToCup(tsp) {
  //n / 48
  return tsp / 48;
}

function tspToTbsp(tsp) {
  //n / 3
  return tsp / 3;
}

function calculator(from, to, value) {
  switch (from + to) {
    case "cuptbsp":
      return cupToTbsp(value);
    case "cuptsp":
      return cupToTsp(value);
    case "tbspcup":
      return tbspToCup(value);
    case "tbsptsp":
      return tbspToTsp(value);
    case "tsptbsp":
      return tspToTbsp(value);
    case "tspcup":
      return tspToCup(value);
    default:
      return value;
  }
}

export function convert(from, to, value) {
  let number = +calculator(from, to, value);
  return number.toFixed(4);
}
