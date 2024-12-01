function studentMarks(grade) { //function studentMarks that returns the grade of the student
    if (grade > 79) {
        return "A";// if student grade is above 79, score is A
    }
    else if (grade >= 60 && grade <= 79) {
        return "B";// if student grade is between 60 and 79, score is B
    }
    else if (grade >= 49 && grade <= 59) {
        return "C"; // if student grade is between 49 and 59, score is C
    }
    else if (grade >= 40 && grade <= 48) {
        return "D"; // if student grade is between 40 and 48, score is D
    }
    else {
        return "E"; // if student grade is beLOW 40, score is E
    }

}

const score = prompt("Enter Marks between 0-100: ");//A pop up to prompt entering marks btw 0-100
console.log(studentMarks(score)); // returns the grade of the student once user inputs marks