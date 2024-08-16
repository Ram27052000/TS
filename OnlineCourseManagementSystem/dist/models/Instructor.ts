import { Person } from "./Person";
import { Course } from "./Course";

export class Instructor extends Person {
    private _instructorCourses: Course[] = [];

    get instructorCourses(): Course[] {
        return this._instructorCourses;
    }

    set instructorCourses(value: Course[]) {
        this._instructorCourses = value;
    }

    constructor(id: number, name: string, email: string, instructorCourses: Course[] = []) {
        super(id, name, email);
        this._instructorCourses = instructorCourses;
    }

    assignCourse(course: Course) {
        if (!this._instructorCourses.includes(course)) {
            this._instructorCourses.push(course);
        }
    }

    removeCourse(course: Course) {
        const index = this._instructorCourses.indexOf(course);
        if (index > -1) {
            this._instructorCourses.splice(index, 1);
        } else {
            throw new Error("Course not found in instructor's course list");
        }
    }
}
