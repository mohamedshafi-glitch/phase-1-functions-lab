  function distanceFromHqInBlocks(PickupLocation) {
        const hqLocation = 42;
return Math.abs(PickupLocation - hqLocation);


  }
function distanceFromHqInFeet(PickupLocation) {
    return distanceFromHqInBlocks(PickupLocation) * 264;
  // call the  function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet


    }
      function distanceTravelledInFeet(start, destination) {
        return Math.abs(destination - start) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }   
  }





