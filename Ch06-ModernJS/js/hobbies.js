

const hobbiesArray = [
    { name: 'fishing', lengthInYearsAtHobby: 25 },
    { name: 'soccer', lengthInYearsAtHobby: 15},
    { name: 'cooking', lengthInYearsAtHobby: 11}
];


function printHobbyInfo(hobby){
    console.log(`${hobby.name} has been my hobby for ${hobby.lengthInYearsAtHobby}`);
}

for(let hobby of hobbiesArray){
    printHobbyInfo(hobby)
}