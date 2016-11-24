/*
This file solves interview cake puzzle puzzle number 29. https://www.interviewcake.com/question/javascript/bracket-validator
The program identifies whether or not a string representation of brackets are properly closed.
The solution is o(n) space and o(n) complexity. The reason it is o(n) is because you have to loop through the entire string.
The reason it is o(n) space, and this is at worst case, is that you have to store all opener strings in a stack.
The reason a stack data structure is ideal for this problem is because you want to keep track of your latest opener bracket.
Stacks are good for keeping track of the last something element and also tree traversal.
*/

var brackets1 = "}}()[]}}";
var brackets2 = "{[(])}";
var brackets3 = "{[}";

console.log(areBracketsClosed(brackets1));
console.log(areBracketsClosed(brackets2));
console.log(areBracketsClosed(brackets3));

// o(n) work, o(n) space for the opener stack
function areBracketsClosed(bracketString) {
    var leftBrackets = "{[(";
    var rightBrackets = "}])";
    var openerStack = new Array();
    var bracketStringArray = bracketString.split('');


    for (var i = 0; i < bracketStringArray.length; i++) {
      var currentCharacter = bracketStringArray[i];
      if (characterIsInLeftBrackets(currentCharacter))
        openerStack.push(currentCharacter);
      else if (characterIsInRightBrackets(currentCharacter)) {
        var currentOpener = openerStack.pop();
        if (isCurrentOpenerClosed(currentOpener,currentCharacter))
            return false;
      }
    }
    return true;

    function isCurrentOpenerClosed(currentOpenerBracket, currentCharacter) {
        var currentOpenerIndex = leftBrackets.indexOf(currentOpenerBracket);
        var targetCloserBracketIndex = rightBrackets.indexOf(currentCharacter);
        if (currentOpenerIndex == targetCloserBracketIndex) {
            return true;
        } else {
            return false;
        }
    }

    function characterIsInLeftBrackets (character) {
        return leftBrackets.indexOf(character) >=0;   
    }

    function characterIsInRightBrackets (character) {
        return rightBrackets.indexOf(bracketStringArray[i]) >=0;  
    }
}
