// 13. Your Own Array: 
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
// that stores several examples. Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
let transportation : string[] = ["Bike", "Car","Bus","Bicycle"]
//For loop
//For each 
//for of loop
for (let i = 0; i < transportation.length; i++) {
      console.log(`I would like to own ${transportation[i]}`);
}
//for each
transportation.forEach(transport => {
    console.log(`I would like to own ${transport}`);
    
});
//for of loop 
for (let trans  of transportation) {
    console.log(`I would like to own  ${trans}`);
}