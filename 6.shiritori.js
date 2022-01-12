class Shiritori {
    constructor() {
        this._words = []
        this._game_over = Boolean
    };

    get words() {
        return this._words
    };
    get game_over() {
        return this._game_over
    };

    set game_over(new_game_over) {
        this._game_over = new_game_over
    };

    play = function(word = "") {
        word = word.toLocaleLowerCase().trim()
        let last_elem = this._words[this._words.length-1]
        if (this._words.length === 0) {
            this._words.push(word)
        }else if (word[0] === last_elem[last_elem.length-1] && !this._words.includes(word)) { 
            this._words.push(word)
        }else {
            this._game_over = true
            console.log(`Game over`) 
        } 
        return this._words
    };

    restart = function() {
        this._words = []
        this._game_over = false
        console.log(`Game restarted`) 
    };

}

const game1 = new Shiritori()

game1.play("word")
game1.play(" Dowry")
game1.play("yodel")
game1.play("leader")
game1.play("righteous")
game1.play("righteous")


console.log(game1._words)

game1.restart()
console.log(game1)

game1.play("word")
game1.play(" Dowry")
game1.play("yodel")
console.log(game1)
