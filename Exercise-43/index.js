let magicians = ["Martin", "Rohit", "Kabir", "Isaac"];

function printMagicians(magicians) {
    for (magic of magicians) {
        console.log(magic);
    }
}

function makeGreat(magicians) {
    for (magic of magicians) {
        console.log(`${magic} The Great Magician`);
    }
}

printMagicians(magicians);
makeGreat(magicians);