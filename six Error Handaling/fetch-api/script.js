/*let persons = [
    {firstName: "Abu", lastName: "Taher"},
    {firstName: "Abdur", lastName: "Rahim"}
]

function createPerson(person) {
    setTimeout(function () {
        posrons.push(persons);
    }, 2000);
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output+= `<li>${person.firstName} ${person.lastName} </li>`;
        });
        document.getElementById('output').innerHTML = output;
    }, 1000);
}
createPerson({firstName :"New Frist", lastName: "new Last"});
getPerson();*/
/**
let persons = [
    {firstName: "Abu", lastName: "Taher"},
    {firstName: "Abdur", lastName: "Rahim"}
]

function createPerson(person, callback) {
    setTimeout(function () {
        persons.push(person);
        callback();
    }, 4000);
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName} </li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 1000);
}
createPerson({firstName :"New Frist", lastName: "new Last"}, getPerson);
 */
//Promiss
//useing then
/**
let persons = [
    {firstName: "Abu", lastName: "Taher"},
    {firstName: "Abdur", lastName: "Rahim"}
]

function createPerson(person) {

        // persons.push(person);
        let prom = new Promise(function (resolve, reject) {
            persons.push(person);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Error!: Something went wrong");
            }
        });
        return prom;
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName} </li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 1000);
}
createPerson({firstName :"New Frist", lastName: "new Last"}).then(getPerson).catch(function(err){
    console.log(err);
}); */
//Fetch API
/**
document.getElementById('click_me').addEventListener('click', getData);
function getData() {
    fetch('http://api.icndb.com/jokes/random/5')
    .then(function(res){
        return res.json();
    }).then(function (data) {
        console.log(data.value);
    }).catch(function (err) {
        console.log(err);
    });
}
 */
//useing arrow func
document.getElementById('click_me').addEventListener('click', getData);
function getData() {
    fetch('http://api.icndb.com/jokes/random/5')
    .then(res=>res.json())
    .then(data => {console.log(data.value);})
    .catch(err=>{ console.log(err);});
}