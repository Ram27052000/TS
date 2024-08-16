import {Student} from "./Student";
import {Instructor} from "./Instructor";

export class Course{
    private _courseList: Course[]= [];
    private _courseId: number;
    private _courseName: string;
    private _courseDescription: string;
    private _students : Student[]= [];
    private _instructors: Instructor[]= [];

    get courseList(): Course[] {
        return this._courseList;
    }

    set courseList(value: Course[]) {
        this._courseList = value;
    }

    get courseId(): number {
        return this._courseId;
    }

    set courseId(value: number) {
        this._courseId = value;
    }

    get courseName(): string {
        return this._courseName;
    }

    set courseName(value: string) {
        this._courseName = value;
    }

    get courseDescription(): string {
        return this._courseDescription;
    }

    set courseDescription(value: string) {
        this._courseDescription = value;
    }

    get students(): Student[] {
        return this._students;
    }

    set students(value: Student[]) {
        this._students = value;
    }

    get instructors(): Instructor[] {
        return this._instructors;
    }

    set instructors(value: Instructor[]) {
        this._instructors = value;
    }
    constructor(courseId: number, courseName: string, courseDescription: string) {
        this._courseId = courseId;
        this._courseName = courseName;
        this._courseDescription = courseDescription;
    }

    uploadStudent(student: Student){
        this._students.push(student);
    }

    getStudentList(){
        const studentList = this._students.map(student => student.toString()).join(',');
        console.log(studentList);
    }

    getStudentCourseListById(id: number){
        const student = this._students.find(student => student.id === id);
        if(student){
            console.log(`StudentName ${student.name}`)
            console.log(student.studentCourseList.map(course => course.toString()).join(','));
        }
        else{
            console.log(`No Course enrolled with studentID ${id}`)
        }
    }

    toString(): string {
        return `${this.courseId}, ${this._courseName}, ${this.courseDescription} `
    }
}