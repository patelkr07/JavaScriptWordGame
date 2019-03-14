window.onload = function () { 


    var words = ["tornado", "lightning", "hail", "wind", "hurricane", "waterspout", "flash flood", "earthquake", "volcano", "avalanche", "thunderstorm", "rain", "tsunami", "landslide", "wildfire", "sinkhole", "dust devil"]

    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    const guessMax = 10
    var letterGuessed = []
    var wordGuessed = []
    var solution
    var attempts
    var wins = 0

    resetGame()

    document.onkeypress = function(event) {
        if (alphabetic(event.key)) {
            checkForLetter(event.key.toUpperCase())
        }
    }
    
    

    function checkForLetter(letter) {
        var gottem = false
        
        for(var i=0, j=solution.length; i<j; i++) {
            if (letter === solution[i]) {
                wordGuessed[i] = letter
                gottem = true
                if (wordGuessed.join("") === solution) { 
                    wins++
                }
            }
        }
        
        if(!gottem) {
            if(!letterGuessed.includes(letter)) {
                letterGuessed.push(letter)
                attempts--
            }

            if (attempts === 0) {
                wordGuessed = solution.split()                
            }
        }

        updateDisplay()
    }

    function alphabetic (ch){
        return /^[A-Z]$/i.test(ch);
    }

    function resetGame() {
        attempts = guessMax

        solution = words[Math.floor(Math.random() * words.length)].toUpperCase()
        
        letterGuessed = []
        wordGuessed = []

        for (var i=0, j=solution.length; i < j; i++){
            if (solution[i] === " ") {
                wordGuessed.push(" ")
            } else {
                wordGuessed.push("_")
            }
        }


        updateDisplay()
    }
    
    function updateDisplay () {
        document.getElementById("currentWord").innerText = wordGuessed.join("")
        document.getElementById("winTotes").innerText = wins
        document.getElementById("guessesLeft").innerText = attempts
        document.getElementById("letterGuessed").innerText = letterGuessed.join(" ")
    }
}


    