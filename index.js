function distanceFromHqInBlocks(beginningBlock) {
  distance = Math.abs(beginningBlock-42);
  return distance
}

function distanceFromHqInFeet(beginningBlock) {
  distance = distanceFromHqInBlocks(beginningBlock)*264;
  return distance
}
