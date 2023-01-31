// Code your solution in this file!

function distanceFromHqInBlocks(value) {
    let blocks;
    blocks = Math.abs(value - 42);
    return blocks;
}

function distanceFromHqInFeet(value) {
    let blocks;
    blocks = distanceFromHqInBlocks(value)
    let blockToFeet = blocks * 264
    return blockToFeet
}

function distanceTravelledInFeet(start,destination) {
    let distance;
    distance = Math.abs(start-destination);
    let blockToFeet = distance * 264;
    return blockToFeet;
}

function calculatesFarePrice(start,destination){
    let response="";
    let blockToFeet = (Math.abs(start-destination)*264)
    if ( blockToFeet <= 400) {
      response = 0
    } else if (blockToFeet > 400 && blockToFeet <= 2000) {
      response = .02 * (blockToFeet-400)
    } else if (blockToFeet > 2000 && blockToFeet <= 2500) {
      response = 25
    } else if (blockToFeet > 2500) {
      response = "cannot travel that far"
    }
    return response
  }
