const distance = 3;
let fare = 13; // minimum fare
if (distance <= 4) {
   fare = 13;
}
else {
   const extraKm = distance - 4;
  fare = 13 + extraKm * 1.8;
}
console.log(`Fare for ${distance} km: $${fare.toFixed(2)}`);