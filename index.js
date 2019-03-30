// Code your solutions in this file

function printBadges(arr) {
  for (let x = 0; x < arr.length; x++) {
    console.log("Welcome " + arr[x] + "! You are employee #" + (x + 1) + ".");
  }
  return arr;
}

function tailsNeverFails() {
  let numTails = 0;

  while (true) {
    if (Math.floor(Math.random() * 2) === 0) {
      break;
    } else {
      numTails++;
    }

    if (numTails === 1000) break;
  }

  return `You got ${numTails} tails in a row!`;
}
