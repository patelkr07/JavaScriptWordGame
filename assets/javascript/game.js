document.onload = function () { }


    var words = ["tornado", "lightning", "hail", "wind", "hurricane", "waterspout", "flash flood", "earthquake", "volcano", "avalanche", "thunderstorm", "rain", "tsunami", "landslide", "wildfire", "sinkhole", "dust devil"]

    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    
    var guessmax = 10

    var blankspace = "_"

    var randomWord = words[Math.floor(Math.random()*words.length)];

    var numBlanks = randomWord.length;

    var blanks = blankspace.repeat(numBlanks);

    document.write(blanks);


    document.write(randomWord);

    document.onkeyup = function(event) {
    var userGuess = event.key;

document.write(userGuess);
    }