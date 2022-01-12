class Author {
    constructor(name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender
    };

    get name() {
        return this._name
    };
    get email() {
        return this._email
    };
    get gender() {
        return this._gender
    }

    toString = function () {
        let res = this.gender.toLowerCase()
        if (res === "female" || typeof name === "string") {
            return `Mrs ${this.name}`
        }else if (res === "male" || typeof name === "string") {
            return `Mr ${this.name}`
        }
    }
}


const author1 = new Author("John", "vahe@gmail.com", "MaLe")

console.log(author1.gender);
console.log(author1.name);
console.log(author1.toString());



class Book {
    constructor(title, price, quantity) {
        this._author = author1
        this._title = title
        this._price = price
        this._quantity = quantity
    };

    get title() {
        return this._title
    };
    get author() {
        return this._author
    };
    get price() {
        return this._price
    };
    get quantity() {
        return this._quantity
    };

    set title(newTitle) {
        if (typeof(newTitle) === "string") {
            this._title = newTitle
        }
        
    };
    set author(newAutor) {
        throw "Error"
    };
    set price(newPrice) {
        if (typeof(newPrice) === "number") {
        this._price= newPrice
        }
    };
    set quantity(newQuantity) {
        if (typeof(newQuantity) === "number") {
        this._quantity = newQuantity
        }
    };

    getProfit = function () {
        return `Profit is: ${this.price*this.quantity}`
    }

    toString() {
        return author1.toString()
    }

} 
const book1 = new Book("Insepetion", 50, 1000)
console.log(book1.getProfit())
console.log(book1.toString())
console.log(book1.author)