/*
Question 1
    Create an object student using object literal which has
        Properties: firstName: String, lastName: String, grades: Array
        Methods:
            inputNewGrade(newGrade): push newGrade to grades
            computeAverageGrade(): return average of grades
    Create an Array with multiple students which are created using Object.create();
        Then compute the average grade for all students in the array
 */

let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade(...newGrade) {
        this.grades = [...this.grades, ...newGrade]
    },
    computeAverageGrade() {
        return this.grades.reduce((prev, current, index, arr) => prev + current / arr.length, 0);
    }
}

// ======== Student 1 =============
let stu1 = Object.create(student);
stu1.firstName = 'Phat';
stu1.last = 'Nguyen';
stu1.inputNewGrade(1, 2, 3);

// ======== Student 2 =============
let stu2 = Object.create(student);
stu2.firstName = 'Vi';
stu2.last = 'Nguyen';
stu2.inputNewGrade(4, 5, 6);

// ======== Student 3 =============
let stu3 = Object.create(student);
stu3.firstName = 'Ruby';
stu3.last = 'Nguyen';
stu3.inputNewGrade(7, 8, 9, 10);

let students = [stu1, stu2, stu3];

// ======== Calculate average of grades for all students
let avg = students.reduce((prev, current, index, arr) =>
    prev + current.computeAverageGrade() / arr.length
, 0);

console.log(avg)

/*
Question 2 Redo question 2 using Constructor Function
 */

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    this.inputNewGrade = function(...newGrade) {
        this.grades = [...this.grades, ...newGrade]
    }

    this.computeAverageGrade = function() {
        return this.grades.reduce((prev, current, index, arr) => prev + current / arr.length, 0);
    }
}

let stu1 = new Student('Phat', 'Nguyen');
stu1.inputNewGrade(1, 2, 3);

let stu2 = new Student('Vi', 'Nguyen');
stu2.inputNewGrade(4, 5, 6);

let stu3 = new Student('Ruby', 'Nguyen');
stu3.inputNewGrade(7, 8, 9, 10);

let students = [stu1, stu2, stu3];

// ======== Calculate average of grades for all students
let avg = students.reduce((prev, current, index, arr) =>
        prev + current.computeAverageGrade() / arr.length
    , 0);

console.log(avg)

/*
Question 3 - Add a new method named sort() without parameters in built-in constructor function Array.
It'll sort all elements in the array in ascending order
 */
let nums = [1, 3, 1, 3, 10, 33, 2, 6, 8, 0];
Array.prototype.mysort = function() {
    this.sort((a, b) => a - b);
}
console.log(nums)
nums.mysort();
console.log(nums)

/*
Question 5 - Singly LinkedList
Use Constructor Function
 */

function LinkedList() {

    this.head = null;

    this.add = function (data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    this.remove = function (data) {
        let prev = null, current = this.head;
        let found = false;
        while(current !== null) {
            if(current.data === data) {
                found = true;
                break;
            }
            prev = current;
            current = current.next;
        }
        if(found) {
            if(prev !== null) {
                prev.next = current.next;
            } else {
                this.head = this.head.next;
            }
        }
    }

    this.print = function () {
        let result = 'LinkedList{';
        let current = this.head;
        while(current !== null) {
            result += current.data + (current.next !== null ? ', ' : '');
            current = current.next;
        }
        result += '}';
        console.log(result)
    }

    function Node(data) {
        this.data = data;
        this.next = null;
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
Question 5 - Singly LinkedList
Use Object Literal
 */
let myLinkedList = {
    head: null,
    add: function (data) {
        let n = Object.create(this.node);
        n.data = data;
        if(this.head === null) {
            this.head = n;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = n;
        }
    },

    remove: function (data) {
        let prev = null, current = this.head;
        let found = false;
        while(current !== null) {
            if(current.data === data) {
                found = true;
                break;
            }
            prev = current;
            current = current.next;
        }
        if(found) {
            if(prev !== null) {
                prev.next = current.next;
            } else {
                this.head = this.head.next;
            }
        }
    },
    print: function () {
        let result = 'MyLinkedList{';
        let current = this.head;
        while(current !== null) {
            result += current.data + (current.next !== null ? ', ' : '');
            current = current.next;
        }
        result += '}';
        console.log(result)
    },
    node: {
        data: null,
        next: null
    }
}

myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);
myLinkedList.add(4);
myLinkedList.print();
console.log('===== Using Object Literal - After remove 2 =======')
myLinkedList.remove(2);
myLinkedList.print();

