import {Person} from './Person'
import {Book} from './Book'
class Member extends Person{
    memberShipNumber: String;
    borrowedBooks: Book[] =[];

    constructor(id:number, name:string, email:string, membershipNumber: string) {
        super(id,name,email);
        this.memberShipNumber = membershipNumber;
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Membership Number : ${this.memberShipNumber}`)
        if(this.borrowedBooks.length > 0){
            console.log(`BorroweBooks`)
            this.borrowedBooks.forEach(book => {
                console.log(`Borrowed books name ${book.title} ${book.author}`)
            });
        }
        else{
            console.log(`No books borrowed`);
        }
    }

    borrowBookByMember(book: Book){
        if(book.isAvailable){
            this.borrowedBooks.push(book);
            book.borrowBook();
        }
        else{
            console.log(`Book is ${book.title} not available`)
        }
    }

    returnBookByMember(book: Book){
        const index = this.borrowedBooks.indexOf(book);
        if(index> -1){
            this.borrowedBooks.splice(index,1);
            book.returnBook();
        }
        else{
            console.log(`Book has been not borrowed by this member`);
        }
    }


}