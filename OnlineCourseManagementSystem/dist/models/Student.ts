import {Person} from "./Person";
import {Course} from "./Course";

export class Student extends Person {
    private _studentCourseList: Course[] = [];

    get studentCourseList(): Course[] {
        return this._studentCourseList;
    }

    set studentCourseList(value: Course[]) {
        this._studentCourseList = value;
    }

    constructor(id: number, name: string, email: string) {
        super(id, name, email);
    }

    enrollInCourse(course: Course) {
        if (!this._studentCourseList.includes(course)) {
            this.studentCourseList.push(course);
        }
    }

    dropCourseById(courseIdNumber: number) {
        const index = this._studentCourseList.findIndex(course => course.courseId === courseIdNumber);
        if (index > -1) {
            this.studentCourseList.splice(index, 1);
        } else {
            throw new Error("Course has been enrolled so it is not possible to drop");
        }
    }

    toString(): string {
        return `StudentID ${this.id}, StudentName ${this.name} , StudentEmail ${this.email}`
    }
}

