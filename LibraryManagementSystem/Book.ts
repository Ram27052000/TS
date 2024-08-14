export class Book{
    title: string;
    author: string;
    isbn: string;
    isAvailable: boolean;

    constructor(title: string, author: string, isbn: string, isAvailable: boolean) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrowBook = (): void => {
        if(this.isAvailable){
            this.isAvailable = false;
            console.log(`Book has been borrowed ${this.title}`)
        }
        else{
            console.log(`Book ${this.title} is available`)
        }
    }

    returnBook(){
        if(!this.isAvailable){
            this.isAvailable = true;
            console.log(`Book ${this.title} has been returned`)
        }
        else{
            console.log(`book ${this.title}  has been not borrowed`);
        }
    }
}