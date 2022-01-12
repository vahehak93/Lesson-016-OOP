class CustomConsole {
    constructor(str) {
        this._str = str
        
    }

    log = function(...args) {
        let str = String(args.join(","))
        return `${this._str}: ${str}`
    };
    history = function(newRange = "aaa") {
        return newRange
    };
    clearHistory = function() {
        this.newRange = ""
        return true
    };  
}

const myConsole = new CustomConsole("Regular")


console.log(myConsole.log(1,2,3))
console.log(myConsole.history())
console.log(myConsole.clearHistory())

