function cupToTbsp(cup) {
  //n * 16
  return (cup * 16);
}

function cupToTsp(cup) {
  return (cup * 48);
}

function tbspToCup(tbsp) {
  //n / 16
  return (tbsp / 16);
}

function tbspToTsp(tbsp) {
  //n * 3
  return (tbsp * 3);
}

function tspToCup(tsp) {
  //n / 48
  return (tsp / 48);
}

function tspToTbsp(tsp) {
  //n / 3
  return (tsp / 3);
}

export function convert(from, to, value) {
  switch (from + to) {
    case "cuptbsp":
      return cupToTbsp(value);
      break;
    case "cuptsp":
      return cupToTsp(value);
      break;
    case "tbspcup":
      return tbspToCup(value);
      break;
    case "tbsptsp":
      return tbspToTsp(value);
      break;
    case "tsptbsp":
      return tspToTbsp(value);
      break;
    case "tspcup":
      return tspToCup(value);
      break;
    default:
      return value;
      break;
  }
}
