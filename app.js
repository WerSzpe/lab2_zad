const _ = require('lodash');

const user =
{
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4,3,3.5],
            weight: 5
        }
    ]
};

function getFromUser(obj) {
    let name = obj.name;
    let surname = obj.surname;
    let sub1 = obj.allGrades[0];
    let sub2 = obj.allGrades[1];
    let sub3 = obj.allGrades[2];

    let sub1_grades = sub1.grades;
    let sub1_weight = sub1.weight;
    let sub2_grades = sub2.grades;
    let sub2_weight = sub2.weight;
    let sub3_grades = sub3.grades;
    let sub3_weight = sub3.weight;

    let nom1=0;
    let nom2=0;
    let nom3=0;

    for(let i=0;i<sub1_grades.length;i++) {
        nom1 = nom1 + (sub1_grades[i]*sub1_weight);
    };

    for(let i=0;i<sub2_grades.length;i++) {
        nom2 = nom2 + (sub2_grades[i]*sub2_weight);
    }

    for(let i=0;i<sub3_grades.length;i++) {
        nom3 = nom3 + (sub3_grades[i]*sub3_weight);
    }

    let nom = nom1+nom2+nom3;

    let den = sub1_weight*sub1_grades.length+sub2_weight+sub2_grades.length+sub3_weight*sub3_grades.length;

    let avgW = nom/den;

    console.log('Imię: '+name);
    console.log('Nazwisko: '+surname);
    console.log('Średnia ważona: '+avgW);
}

function findWeightOne(obj) {
    let arrFromObj = obj.allGrades;
    let subject = _.find(arrFromObj, { weight: 1 });
    console.log("Waga 1: " + subject.subjectName);
}

getFromUser(user);
findWeightOne(user);