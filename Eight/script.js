/* Array Destruction */

// let arr = ['Subahan allah', 'Alhamdu Lillah', 'Allahu Akbar', 'La yelaha Illallah'];

/* let [tasbih1, tasbi2, tasbih3] = arr;

 console.log(tasbih1, tasbi2, tasbih3);*/
//skip any array's member
/*let [tasbih1,, tasbih3] = arr;
console.log(tasbih1, tasbih3);*/

//Swapping
/**
let a, b;
a=7; b=21;
// let temp = a;
// a=b;
// b=temp;
 [a, b]=[b ,a];

console.log(`a= ${a}, b= ${b}`);
 */
//Obj Destructing
/**
let person = {
    firstName:"Abu",
    lastName:"Taher",
    dob:"08-12-2021"
}
//  let fname =person.firstName, lname = person.lastName, dob = person.dob;
//  console.log(fname,lname,dob);

// let {firstName, lastName,dob}= person;
// let {firstName:fname, lastName,dob}= person;
// console.log(fname, lastName, dob);

function display({firstName, lastName,dob}){
    console.log(firstName, lastName, dob);  
}
display(person); */
/**
//Spread Opetatot

// let str = 'Bismillah';
// let newStr = [...str];
// console.log(newStr);

// let fruit1= ['Orange', 'Banana','Papaya'];
// let fruit2= ['Jack', 'Lemon','Lemon'];
// let newFruit = 'Barry';

// let newArr = [...fruit1, newFruit, ...fruit2];
// console.log(newArr);

//  let Person = {
//      fName: 'Abu',
//      lName: 'Tahe',
//  }
// let newPerson ={...Person, dob:'01-01-1000'}
// console.log(newPerson);

let number = [1,32,-33,2];
// console.log(Math.max(...number));

let person = ['Abu', 'Taher'];
let test=(fname, lname)=>{
console.log(`First Name ${fname}, Last name:${lname}`);
}
test(...person);
 */

// Rest Operator

// let fruits= ['Orange', 'Banana','Papaya'];
// let [first, ...second]=fruits;
// console.log(first, second);
/**
let Person = {
         fName: 'Abu',
         lName: 'Taher',
         dob: '12-12-1212'
     }
    //  let {fName, lName}=Person;
    //  console.log(fName, lName);

    let { fName, ...lName }=Person;
    //  console.log(fName);
    //  console.log(lName);

    // let test=(name, num1, ...number)=>{
    //     console.log(name);
    //     console.log(num1);
    //     console.log(number);
    // }
    // test('Abu Taher',33,65,12,33);

    let moreNumber=[98,11,77];
    let test=(name, ...number)=>{ //Rest
        console.log(name);
        console.log(number);
    }
    test('Abu Taher',33,65,12,33);
    test('Taher', ...moreNumber);//Spread




    //Spread operation parameter use when function called
    //rest Operator function Param
     */
     //Itaretor

    //  let iterable = "Bismillah";
    //  iterable = [1,5,6,9];
    //  //Symbo.iterator
    //  let iter = iterable[Symbol.iterator]();
    //  console.log(iter);
    //  console.log(iter.next());
    //  console.log(iter.next());
    //  console.log(iter.next().value);
    //  console.log('Alhamdu Lillah');
    //  console.log(iter.next());
    //  console.log(iter.next());
    //  console.log(iter.next());

    let names = ['Bismillah', 'Subahana allah', 'Alhamdu Lilah', 'Allahu Akbar'];
    //Custom Iterator
    function customerIter(arr){
        let i=0;
        return {
            next: function () {
                return i<arr.length? {value:arr[i++], done:false} : {done:true}
            }
        }
    }

    let tasbih = customerIter(names);
    console.log(tasbih.next());
    console.log(tasbih.next());
    console.log(tasbih.next());
    console.log(tasbih.next());
    console.log(tasbih.next());