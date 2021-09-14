// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
let dolphinsScore1 = [96, 108, 89];
let dolphinsScore2 = [97, 112, 101];
let dolphinsScore3 = [97, 112, 101];
let koalasScore1 = [89, 91, 110];
let koalasScore2 = [109, 95, 123];
let koalasScore3 = [109, 95, 106];

function average(arr) {
  const reducer = (acc, val) => acc + val;
  let sumArr = arr.reduce(reducer);
  let result = (sumArr / arr.length).toFixed(0);
  return result;
}

function play(score1, score2) {
  if (score1 > score2) console.log('Dolphins win!');
  else if (score2 < score1) console.log('Koalas win!');
  else console.log('The match draws')
}

play(average(dolphinsScore3), average(koalasScore3));