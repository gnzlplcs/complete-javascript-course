// reviewing functions

// const calcAge = function (birthYeah) {
//   return 2022 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }

// yearsUntilRetirement(1983, 'Gonzalo')
// yearsUntilRetirement(1931, 'Pedro')

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3)/3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`)
//   } else {
//     console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`)
//   }
// }

// const dolphinsAvg1 = calcAverage(44, 23, 71)
// const koalasAvg1 = calcAverage(65, 54, 49)
// const dolphinsAvg2 = calcAverage(85, 54, 41)
// const koalasAvg2 = calcAverage(23, 34, 27)

// checkWinner(dolphinsAvg1, koalasAvg1)
// checkWinner(dolphinsAvg2, koalasAvg2)

////////////////////////////////
// intro to ARRAYS: methods

// push() method
const friends = ['Michael', 'Steven', 'Peter'];
const newLengthFriends = friends.push('Jay')
console.log(friends)
console.log(newLengthFriends) // returns 4

// unshift() method
const returnsSomething = friends.unshift('John')
console.log(friends)
console.log(returnsSomething) // returns 5

// pop()
const popped = friends.pop()
console.log(popped) // returns 'Jay'
console.log(friends)

// shift()
const shifted = friends.shift()
console.log(shifted) // returns 'John'
console.log(friends)

// indexOf()
console.log(friends.indexOf('Steven')) // returns: 1
console.log(friends.indexOf('Gonzalo')) // returns: -1

// includes()
console.log(friends.includes('Gonzalo')) // returns: false
console.log(friends.includes('Steven')) // returns: true
