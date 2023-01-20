/* eslint-disable */
import "./style.css";
window.onload = function() {
  //write your code here
document.querySelector(".card").classList.add(RandomSuit());
document.querySelector(".card").innerHTML = RandomNumber(); 

};

let suit = ['heart', 'spade', 'club', 'diamond']
let number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let suitIndex = [Math.floor(Math.random() * suit.length)]
let numberIndex = [Math.floor(Math.random() * number.length)]
function RandomSuit(){
return suit[suitIndex]
}

function RandomNumber(){
  return number[numberIndex]
}


