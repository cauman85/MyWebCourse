let john = 'John'

function displayName(name){
    console.log('Hello ' + name);
}

function calculateTempInF(C){
    let c = (C - 32) * 5/9;
    console.log('Temperature in Celsius is ' + c);
}

function calculateTempInC(F){
    let f = F * 9/5 + 32;
    console.log('Temperature in Fahrenheit is ' + f);
}

displayName("John Deere");
calculateTempInF(65);
calculateTempInC(65);