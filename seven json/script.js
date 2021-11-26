let normalObjData = {
    name: 'Normat Data',
    profession: 'Student',
    class: 'Nothing',
    hobby: 'kidding and Frixking',
}
let json_data = {
    'name': 'JSON',
    'profession': 'Student',
    'class': 'Nothing',
    'hobby': 'kidding and Frixking',
}
//Convartion json to Object
let objToJson = JSON.stringify(normalObjData);
// console.log(JSON.parse(objToJson));
console.log(objToJson);
