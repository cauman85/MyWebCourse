

let hobbies1 = ['fishing', 'soccer', 'cooking'];

function passArray(hobbies){
    console.log(`I like ${hobbies.length} hobbies`)
    for(let count = 0; count < hobbies.length; count++){
        let element = hobbies[count];
        console.log('I like ' + element);
    }
}

passArray(hobbies1);
