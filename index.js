function distanceFromHqInBlocks(beginningBlock) {
  distance = Math.abs(beginningBlock-42);
  return distance
}

function distanceFromHqInFeet(beginningBlock) {
  distance = distanceFromHqInBlocks(beginningBlock)*264;
  return distance
}

function distanceTravelledInFeet(beginningBlock, endingBlock) {
  distance = Math.abs(beginningBlock-endingBlock)*264;
  return distance
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet < 400) {
    fare = 0;
    return fare
  } else if (distanceTravelledInFeet > 2500) {
    message = "cannot travel that far";
    return message
  } else if (distanceTravelledInFeet > 2000) {
    rate = 25;
    return rate
  } else {
    rate = Math.abs(distanceTravelledInFeet-400)*264;
    return rate
  }
}
