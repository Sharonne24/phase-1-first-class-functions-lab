// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

   function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }

  const fareQuadrupler = createFareMultiplier(4); 
    fareQuadrupler(5); 

const fareDoubler = createFareMultiplier(2);
    fareDoubler(10);

const fareTripler = createFareMultiplier(3);
    fareTripler(12);

function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
  