import {Student} from "../dist/models/Student";
import {Course} from "../dist/models/Course";

const student1 = new Student(1, "Ram", "rvr1743@gmail.com");
const student2 = new Student(2, "Karthik", "karthik713@gmail.com")
const student3 = new Student(3, "Amy", "Amy@gmail.com")
const student4 = new Student(4, "Jane", "Jane@gmail.com")
const student5 = new Student(5, "Ak", "Ak@gmail.com")

const course1 = new Course(101, "Angular", "Frontend-Framework")
const course2 = new Course(102, "Springboot", "backend-Framework")
//Administrative side
course1.uploadStudent(student1);
course1.uploadStudent(student2);
course1.uploadStudent(student3);
course1.uploadStudent(student4);
course1.uploadStudent(student5);
course1.getStudentList();

//To check student list by id for administrative side
student1.enrollInCourse(course1);
student1.enrollInCourse(course2);

//Administrative side
course1.getStudentCourseListById(1);

//student side to check
student1.dropCourseById(102);

//administrative side
course1.getStudentCourseListById(1);
