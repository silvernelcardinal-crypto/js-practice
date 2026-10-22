const distance = 10;
const minimumFare = 13;
const extraKm = distance -4;
const fare =minimumFare + extraKm * 1.8;
console.log(`Fare for 10 km: ${fare.toFixed(2)}`);