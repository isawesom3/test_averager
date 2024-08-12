let score1 = prompt("first score?");
let score2 = prompt("second score?");
let score3 = prompt("third score?");
score1 = parseInt(score1);
score2 = parseInt(score2);
score3 = parseInt(score3);
let sum = score1 + score2 + score3;
alert("The sum is " + sum);
let average = sum / 3;
alert("Your average is " + average);

if (average >= 100) {
  alert("You got bonus points!");
} else if (average === 100) {
  alert("That's perfect!");
} else if (average >= 90) {
  alert("Wow, great job!");
} else if (average >= 80) {
  alert("Nice work!");
} else if (average >= 70) {
  alert("Good job!");
}
else if (average >= 65)
{
  alert ("You passed!")
}
else if (average >= 55)
{
  alert ("You're really close!");
}
else
{
  alert ("You didn't pass. Keep studying.");
}
