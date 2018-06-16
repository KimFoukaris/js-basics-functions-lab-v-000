function distanceFromHqInBlocks(beginningBlock) {
  distance = Math.abs(beginningBlock-42);
  return distance
}

function distanceFromHqInFeet(beginningBlock) {
  distanceFromHqInBlocks(beginningBlock)*264;
  return distance
}