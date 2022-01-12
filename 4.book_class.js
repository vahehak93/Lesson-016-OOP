class Book {
    constructor(title, author) {
        this._title = String(title)
        this._author = String(author)
    };

    get title() {
        return this._title
    };
    get author() {
        return this._author
    };

    toString = function() {
        return `Book ${this._title} by ${this._author}`
    };

    isTheSameBook = function(book) {
        if (this === book) {
            return true
        }
        return false
    }
        
}

const book1 = new Book("Ulysses", "James Joyce")
const book2 = new Book("Don Quixote", "Miguel de Cervantes")


console.log(book1)
console.log(book1._title)
console.log(book1.toString())
console.log(book1.isTheSameBook(book2))



class LibraryBookBase extends Book {
    constructor(title, author, bookId) {
        super(title, author)
        this._bookId = Number(bookId)
    };

    get bookId() {
        return this._bookId
    };
}

const LibraryBookBase1 = new LibraryBookBase("Don Quixote", "Miguel de Cervantes", 001)

console.log(LibraryBookBase1)

class LibraryBook extends LibraryBookBase {
    constructor(title, author, bookId, quantity) {
        super(title, author, bookId)
        this._quantity =Number(quantity)
    };

    get quantity() {
        return this._quantity
    };

    set quantity(newQuantity) {
        if (typeof(newQuantity === "number")) {
            this._quantity = newQuantity
        }
    };

    increaseQuantityBy(amount) {
        this._quantity+=amount
    };
    decreaseQuantityBy(amount) {
        if (amount <= this._quantity) {
            this._quantity-=amount
        }else {
            throw `${amount} is bigger then ${this._quantity} or not a number`
        }
        
    };
}

const book3 = new LibraryBook("Don Quixote", "Miguel de Cervantes", 001, 500)
book3.increaseQuantityBy(70)
book3.decreaseQuantityBy(100)
console.log(book3)

class ReaderBook extends LibraryBookBase {
    constructor(title, author, bookId, expirationDate, isReturned) {
        super(title, author, bookId)
        this._expirationDate = String(expirationDate)
        this._isReturned = Boolean(isReturned)
    };

    get expirationDate() {
        return this._expirationDate
    };
    get isReturned() {
        return  this._isReturned
    };

    set expirationDate(newExpirationDate) {
        this._expirationDate = newExpirationDate
    };
    set isReturned(newIsReturned) {
        if (typeof(newIsReturned) === "boolean")
        this._isReturned = newIsReturned
    };

    toString = function() {
        return `Book ${this._title} by ${this._author}, id: ${this._bookId}, exper. Date: ${this._expirationDate}, isReturned: ${this._isReturned}`
    };
}

const book4 = new ReaderBook("Don Quixote", "Miguel de Cervantes", 001, "2030", true)

console.log(book4.toString()) 
console.log(book4)


class Reader {
    constructor(firstName, lastName, readerId) {
        this._firstName = String(firstName)
        this._lastName = String(lastName)
        this._readerId = Number(readerId)
        this._books = [book4]
    };

    get books() {
        return this._books
    }

}

const reader1 = new Reader("John", "Sam", 1)
console.log(reader1.books)