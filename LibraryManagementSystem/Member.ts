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
    }
}