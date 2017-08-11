'use strict';

/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the parameters and values that were input/calculated in the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.

For TODO item, be sure to change it to say DONE when you have successfully completed the task*/

// TODO: Write your code here
function sum(a,b){ //eslint-disable-line
  var result = a + b;
  var output = 'The sum of ' + a + ' and ' + b + ' is ' + result + '.';
  return [result, output];
}

// TODO: Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!
