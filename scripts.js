//document.write("Objects and arrays")

const character = [
    {
        name: "Meek",
        heatlh: 80,
    },
    {
        name: "Floyd Mayweather",
        health: 80,
    },
    {
    name: "Mike Tyson",
    health: 80,
}
   
];

const opponent = [
    {
        name: "Tyson Fury",
        heatlh: 100,
    },
    {
    name: "Pac Man",
    heatlh: 100
    }
];

// const char = character[0]

// for(let i=0; i < character.length; i = i +1){
//     const characters = character[i];
//     console.log(characters);

// }

// character.forEach(
//     function(name,health){
//         console.log(character,opponent)
//     }
// )
character.push(opponent)

// Loop to print the name and health of all characters
character.forEach(function(character) {
    console.log(`${character.name}: Health = ${character.health}`);
});