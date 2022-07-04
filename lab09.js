/*
Question 1: Use class syntax to create LinkedList. Methods below:
    1) add(value)
    2) remove(value)
    3) print()
 */
class LinkedList {

    static Node = class {
        constructor(data, next= null) {
            this.data = data;
            this.next = next;
        }
    }

    constructor() {
        this.head = null;
    }

    add(data) {
        let node = new LinkedList.Node(data);
        if(this.head === null) {
            this.head = node;
        } else {
            let cur = this.head;
            while(cur.next !== null) {
                cur = cur.next;
            }
            cur.next = node;
        }
    }

    remove(data) {
        let cur = this.head, prev = null;
        while(cur !== null && cur.data !== data) {
            prev = cur;
            cur = cur.next;
        }
        if(prev !== null) {
            prev.next = cur.next;
        } else {
            this.head = this.head.next;
        }
    }

    print() {
        let result = 'MyLinkedList{';
        let current = this.head;
        while(current !== null) {
            result += current.data + (current.next !== null ? ', ' : '');
            current = current.next;
        }
        result += '}';
        console.log(result);
    }
}




let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.print();
console.log('===== Using Constructor Function: After remove 2 =======')
linkedList.remove(2);
linkedList.print();

/*
Question 2
This is a quiz system which allows students to take quiz, get each student's quiz score and
compute average score of students.
 */

class Student {
    constructor(id, answers=[]) {
        this.id = id;
        this.answers = answers;
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        this.students = students;
        questions.forEach(q => this.questions.set(q.qid, q.answer));
    }

    scoreStudentBySid(studentId) {
        const student = this.students.find( ({ id }) => id === studentId);
        return student.answers
            .filter(q => this.questions.get(q.qid) === q.answer)
            .reduce(prev => prev + 1 , 0);
    }

    getAverageScore() {
        return this.students.reduce((average, currentStudent, index, array) => average + this.scoreStudentBySid(currentStudent.id) / array.length, 0);
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5