//Q1)

const shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

//** add meat at the beginning 
shoppingCart.unshift('Meat');
// shoppingCart.splice(0,0,'Meat');
console.log(shoppingCart);


//** add sugar at the end 

// shoppingCart.push('sugar');
shoppingCart.splice(5,0,'sugar');
console.log(shoppingCart);


let alergicHoney = true;
if(alergicHoney){
    const honeyIndex = shoppingCart.indexOf('Honey');
    if(honeyIndex !== -1){             // why -1 becuase we know honey is at the 4 
        shoppingCart.splice(honeyIndex,1)
    }
};

// delete shoppingCart[4]; // this will also there but it will create empty space at 4 index position 
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//     ******************************************************************************************       \\

//Q2)

 const ages = [19,22,19,24,20,25,26,24,25,24];
/// sorting 
  let sortarr = ages.sort();
console.log(sortarr);


let min = Math.min(...ages);
let max = Math.max(...ages);
console.log("minimum age is " + min + "\nmaximum age is " + max);
// min age  recursive 

function minAge(ages,index = 0, min = Infinity){
    if(index === ages.length){
     return min;
     };
    if(ages[index] < min){
        min = ages[index]
    };
        return minAge(ages, index + 1, min);
    

 };
  const findMinAge = minAge(ages);
  console.log(findMinAge);
// console.log(minAge(ages));


// max age recursive 
function maxAge(arr,index = 0, max = -Infinity){
    if(index === arr.length) return max;
    if(arr[index] > max){
        max = arr[index];
    };
    return maxAge(arr, index + 1, max);
}
const findMaxAge = maxAge(ages);
console.log(findMaxAge);


/// medianAge 

function medianAge(arr){
    const sortarr = ages.sort();
    const mid = Math.floor(sortarr.length/2);

    if (sortarr.length % 2 == 0){                            /// then it is even 
        return (sortarr[mid - 1] + sortarr[mid])/2
    }else{
        return sortarr[mid];                        /// odd length 
    }

};
console.log("Median Age " + medianAge(ages));

// Average age (recursive)

function addAverage(arr, index = 0){
    if(index === arr.length )return 0;
    
     return arr[index] + addAverage(arr , index + 1)         /// arr[0] + addAverage(arr, 0+1) = 19+19 this is what it means in second under the function it tell that inside the arr add 1 to current index so it moved to next arr
    
};

function sumAverage(arr){
    const sum = addAverage(arr);
    return sum / arr.length;
}
console.log(sumAverage(ages));

// average using loop

let sumAges = 0;
for(let i = 0; i < ages.length; i++){
  sumAges += ages[i]; 
};
const sum = sumAges / ages.length;
console.log(sum);


// find the range 
// using recursive we have already calculate max and min above 

const range = findMaxAge - findMinAge;
console.log(range);

// using simple method

const simpleRange = max - min;
console.log(simpleRange);


//  Compare the value of (min - average) and (max - average), use abs() method

const minAgeAverage = Math.abs(min - sumAverage(ages));
const maxAgeAverage = Math.abs(max - sumAverage(ages));

console.log(minAgeAverage);
console.log(maxAgeAverage);

if (minAgeAverage > maxAgeAverage) {
    console.log("Minimum age  is far from then  average age.");
} else if (maxAgeAverage > minAgeAverage) {
    console.log("Maximum age  is far from  then the average age");
} else {
    console.log("Both Minimum and Maximum are equally distant from the average.");
}

/// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   \\\\

//Q3) 
const student = {
    name : "Adnan",
    age : 23
};

Object.preventExtensions(student);

student.city = "india";

// console.log(student);

let extensibleStatus = Object.isExtensible(student);
console.log( "is student extensible ? \n" + extensibleStatus);                // you will be getting false because above we have did as Object.preventExtensions which means used to prevent new properties from being added to an object


const teacher = {
    subject : "math"
}
Object.seal(teacher);

teacher.class = "X-A";
// console.log(teacher);

let sealedStatus = Object.isSealed(teacher);
console.log("is Teacher Sealed ? \n" + sealedStatus);

// --------------------------------------------------------------------------------------------------  \\

// Q4)

const students = [

  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade:
"A" },

  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade:
"B" },

  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade:
"A" },
];

// function to add new student

function addStudent(firstName, lastName, age, grade){
    let newId;
    if(students.length > 0 ){
        newId = students[students.length - 1].id + 1;
        
     }else{
        newId = 1;
     }
          const newStudent = {
        id : newId, firstName, lastName, age, grade
     }


     students.push(newStudent);
     console.log(`student ${firstName} ${lastName} was added`);
 
    };
    addStudent("adnan", "maniyar", 23, "B");
    console.log(students);

    //function to update student information

    function updateInformation(id,age,grade){
      const student = students.find(student => student.id === id);
      if(student){
        student.age = age;
        student.grade = grade;
        console.log(`student ${student.firstName} ${student.lastName} updated to age ${age} and ${grade}`);
      }else{
        console.log(`student with id ${id} not found`)
      }
    };
    updateInformation(2,23,"C");
    console.log(students);

    // function to delete students

    function deleteStudent(id){
        const index = students.findIndex(student => student.id === id);
        // console.log(index);
        if(index !== -1){
            const removedStudent = students[index];
             students.splice(index,1);
            console.log(`student ${removedStudent.firstName} ${removedStudent.lastName} and age ${removedStudent.age} grade ${removedStudent.grade} all information will be deleted`)
        }
    };
    deleteStudent(1);
    console.log(students);

    // fuction to display list of all student 

    function listStudent(students){
        let list = "";
        for(let i = 0; i < students.length; i++){
            list += students[i].firstName + " " + students[i].lastName + "\n";
        }
         
        return list;
    };
    let studentName = listStudent(students);
    console.log(studentName);

    /// function to display list of all student using recursive 

    function listStudent1(students, index = 0){
        if(students.length <= index) return "";
        let fullName = students[index].firstName + " " + students[index].lastName + "\n";
        return fullName + listStudent1(students, index + 1);
    }

    console.log(listStudent1(students));


    /// function to find student grade 

    function findGrade(students, targetGrade, index = 0, result = []){
        if(students.length <= index) return result;
        if(students[index].grade === targetGrade){
            result.push(students[index]);
        }
        return findGrade(students, targetGrade, index + 1, result);
    };
    let gradeA = findGrade(students, "A");
      console.log("Grade A students")
    for(let student of gradeA){
        console.log(`${student.firstName} ${student.lastName}`)
    }
    let gradeB = findGrade(students, "B");
      console.log("\nGrade B students")
    for(let student of gradeB){
        console.log(`${student.firstName} ${student.lastName}`)
    }
    let gradeC = findGrade(students, "C");
      console.log("\nGrade C students")
    for(let student of gradeC){
        console.log(`${student.firstName} ${student.lastName}`)
    }

    // function to calculate the average age of all students using a array method 

    function averageAgeStudents(students, index = 0){
        if(students.length === index) return 0;
        const averageAge = students.reduce((sum,student) => sum + student.age, 0);
        return averageAge / students.length;
    };
    let calculateAverageAge = averageAgeStudents(students);
    console.log("Average age of all students are " + calculateAverageAge);

    //// ------------------------------------------------------------------------------------------ \\\\

    //Q5) 

const student1 = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true
};

function displayStudentInfo(student1){
    for(let property in student1){
        console.log(`Property: ${property}, value: ${student1[property]}`)         // here student1[property] access all property value becuase property access the key
    }
};
displayStudentInfo(student1);

