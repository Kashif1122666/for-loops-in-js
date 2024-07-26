// CHAPTER-18: FORLOOPS

// verification of cleanest city without using loops
// const cleanestCity = ["peshawar","islamabad","lahore","karachi","multan"];
// const cityToCheck = prompt("please enter your city name");

// if(cityToCheck === cleanestCity[0]){
//    alert("It's one of the cleanest cities");
// }    
// else if(cityToCheck === cleanestCity[1]){
//     alert("It's one of the cleanest cities");
//  }
//  else if(cityToCheck === cleanestCity[2]){
//     alert("It's one of the cleanest cities");
//  }
//  else if(cityToCheck === cleanestCity[3]){
//     alert("It's one of the cleanest cities");
//  }
//  else if(cityToCheck === cleanestCity[4]){
//     alert("It's one of the cleanest cities");
//  }else {
//     alert("It's not on the list");
//  }

// for loop syntax
// for(expression1; expression2; expression3){
//   code block to be executed
// }

// Expression 1,
// 1. declare a variable and assign it a value
// 2.it is executed (one time) before the execution of the code CSSLayerBlockRule,

// Expression 2,
// 1.we check the condition
// 2.Define the condition for executing the code block

// Expression 3,
// 1.increment/decrement
// 2.It is executed (every time) after the code block has been executed except the first time

// Understanding for loop with a very simple example
// print numbers one to ten
// for(let numbers = 1; numbers <= 10; numbers++){
//    console.log(numbers);
// }

// verification of cleanest city using loop
const cleanestCities = ["peshawar","islamabad","lahore","karachi","multan"];
const cityToCheck = prompt("please enter your city name");

for (let cityindex = 0; cityindex<cleanestCities.length; cityindex++){
  if (cityToCheck === cleanestCities[cityindex]){
    alert("it's one of the cleanest cities");
  }
}

// totalIterations : 6(0,1,2,3,4,5)
// cityToCheck = "karachi"

// iteration0:
// cityindex:0
// cityindex<cleanestCities.length -> 0 < 5(true)
// cityToCheck === cleanestCities[cityindex]-> "karachi" === cleanestCities[0]-> "karachi" === "peshawar" -> False

// iteration1:
// cityindex:1
// cityindex<cleanestCities.length -> 1 < 5(true)
// cityToCheck === cleanestCities[cityindex]-> "karachi" === cleanestCities[1]-> "karachi" === "islamabad" -> False

// iteration2:
// cityindex:2
// cityindex<cleanestCities.length -> 2 < 5(true)
// cityToCheck === cleanestCities[cityindex]-> "karachi" === cleanestCities[2]-> "karachi" === "lahore" -> False

// iteration3:
// cityindex:3
// cityindex<cleanestCities.length -> 3 < 5(true)
// cityToCheck === cleanestCities[cityindex]-> "karachi" === cleanestCities[3]-> "karachi" === "karachi" -> True

// iteration4:
// cityindex:4
// cityindex<cleanestCities.length -> 4 < 5(true)
// cityToCheck === cleanestCities[cityindex]-> "karachi" === cleanestCities[4]-> "karachi" === "multan" -> False

// iteration5:
// cityindex:5
// cityindex<cleanestCities.length -> 5 < 5(true)
// loop will be terminated because the conditon is false