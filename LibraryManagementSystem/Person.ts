export class Person {
    id: number
    name: string
    email: string

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    displayDetails() : void {
        console.log(`ID: ${this.id} ,Name: ${this.name}, Email: ${this.email}`)
    }
}