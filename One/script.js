var x,y,c;
// x= prompt("Enter number");
// y= prompt("Enter number2");
// // y= prompt(``);
// // x=5;y=5;
// c=parseFloat(x)+parseFloat(y);
// console.log(`${c}`);
/*isNaN*/
// x= 596; 
// y= 'jfdkjfd';
// console.log(isNaN(x)); //false
// console.log(isNaN(y)); //true
/** */

x= 'Bismillah';
y=x.length;
// console.log(y);
let countries = ['Bd','pk','uk'];
countries[1]='kpppp';
countries[3]='ukk';
countries[countries.length]='kfjkdjf';
countries.push('Japan');//include at last
countries.pop();//delete form last
countries.shift();//delete form last
countries.unshift('First');//delete form last
x=x.split('');
// x.forEach(i => {
//     // console.log(i);
// });
x=x.toString();//by default use comma have it's problem
x=countries.join(" ");
countries= countries.sort();
countries.reverse()
/**simple explantion Object  */
let student ={name:"Sayon", class:'two', age:12}
student.roll = 55;
delete student['class'];
/**Primitive Types */
//number, string, boolean
 //deals with value

 let a =4;
 let b =a;
    a=33;
// console.log(b);
/**Reference Type 
 * deals with refference
*/
let numbers = [33,55,22];
let newNumbers = numbers;

newNumbers.push('new');
// console.log(numbers);
