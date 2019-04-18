

let numOne = 1;
let stringOne = '1';

console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);

const day = new Date().getDay();
console.log(day);
if(day == 1){
    console.log("Back to work!")
} else if(day == 3) {
    console.log("Over the hump!")

} else if(day == 6 || day == 0){
    console.log("It is the weekend!")
} else{
    console.log("It is a weekday")
}







// If today is Monday, display "Back to work!"
//     If today is Wedneday, display "Over the hump!"
//     If today is Saturday or Sunday, display "It is the weekend!"
//     For all other days, display "It is a weekday".