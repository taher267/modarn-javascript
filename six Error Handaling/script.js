/*console.log('before Error');
try {
//    undefined.text();  
} catch (err) {
   console.log(err.message); 
   console.log(err.name); 
}
finally{
    console.log('Finally');
}

console.log('After Error');*/
/** let b = 11;
 try {
    if(b>10) throw 'Too Big';
    else if(b<6) throw 'Too small';
 } catch (err) {
     console.log(err);
 } */
/**
 let reg;
 reg= /bismillah/i;
 reg= /Bismillah/;
 reg= /hir Ro/i;
 reg= /him/;
 reg= /Rohim/;
 reg = /Hit/
//  console.log(reg.source);
let str = "Bismillahir Rohmanir Rohim";
//exec() Returns resulat in an Array or null
let result = reg.exec(str);
//test returns ture/false
result = reg.test(str);
//match()
result= str.match(reg);
//search() Returns index of the first math or -1
result = str.search(reg);
//  console.log(result);
 str = 'Lorem ipsum dolor sit amet.';
 reg = 'sit';
 //replace() return new string
 let newstr= str.replace(reg, 'LLT');
 console.log(newstr);
  */
 let reg, str, result;
 //Literal Character
 reg = /dolor/i
 reg = /um Dol/
 //meta Char (^ carot Sign)
 reg= /^lorem/i; //must start with
 reg= /amet.$/i; //must End with
 reg= /^amet$/i; //must start and End with str = 'amet';
 reg= /^a.et$/i; //any one char should be have
 
 str ="Lorem ipsum Dolor sit amet.";
 str = 'amet';
//  str ="Lorem ipsum Dolor sit amet.";

reg = /L*rem/; //0 or more char
reg = /lo?re?m/; // optional but if exist should be before char of ? invertad comma
str = 'Lfdskfkfjdskfjdksfjksdjrem';
str = "lrem";


//Character set using Brackets[]
reg= /l[or]em/ //must be one of them inside of brackets
reg = /l[^or]em/ //Anything except those without inside of brackets but should be have one 
str = 'llem'
reg=/^[lo]rem/
str= 'lrem';// must be start by one char inside of Brackets 
reg = /^[A-F]orem/;
str = 'Eorem';
reg = /[A-Z]psum/;str = 'Lorem ipsum'
reg = /^[A-Z]psum/; str = 'Ipsum' // bracket's inside char shuld be present
reg = /[^A-Z]psum/; str = '0psum' // bracket's inside char shuld be absent
reg = /^[0-9]psum/; str = 'Ipsum' //Must be start with number, First Char 
reg = /[^0-9]psum/; str = 'Ipsum' //Not Allow number
reg = /[0-9][0-9]psum/; str = 'lorem 00psum' //Must 2 Char number
reg = /^[0-9][0-9]psum/; str = '00psum' //Must first 2 Char number

//Braces {} - Quarntifier
reg = /hel{2}o/; str = 'hello' //l char 2 times
reg = /hel{2,5}o/; str = 'helllo' //l char must be ( 2 to 5) times
reg = /hel{2,}o/; str = 'hellllllllllllllllllllo' //Min 2 times
reg = /hel{5}o/; str = 'helllllo' //Min 2 times
//Parenthese () -Grouping
reg = /^([0-9]){5}o/; str = '55445o' //Must be 5 times times [0-9][0-9][0-9][0-9][0-9]

//phone number pattern check
reg = /^01([0-9]){9}$/; str = '01662054586'; //
reg = /(\+88)?-?01[1-9]\d{8}/
//Shorthand Character Classes
reg = /\w/; str = "+jkj9e8*{(&+-e8erw98e9r8e" //word Char -alpha numeric or _, only not Allow str = "!@#$%^&*()-=+"; 
reg = /\w+/; //One or More
reg = /\W/; str = "kfjkd93483$%^&843" //Non Word Character 
reg = /\W+/; str = "_54894d$%^jfkjdf";
reg = /\d/; str = "_d877$%^jfkjdf";
reg = /\d+/; str = "_d$%^25jfkjdf";
reg = /\D/; str = "8498495498j#$%^^%$fkdjfdkj"; //Allow any char Non Digit
reg = /\s\D/; str = "78976 kjkfjd"; //Allow non digit with white space
reg = /\S/; str = ""; //not allow only white space
reg = /\bBilsmilah\b/; str = "89 Bilsmilah jdfhjdh"; //with white space allow
//Assertions
reg = /x(?=y)/;  str= "zxy"; //x and y besides and if x must be before y
reg = /x(?!y)/;  str= "jfkdfdkyfdjkfjdx"; //if y must be before x
reg = /^(\+88)?(88)?01([0-9]){9}$/; str = "01962054584";
//email vaidation abu.taher334@gmail.com.bd
// reg = /^([a-z])+\.?([0-9]+)?[^\.]@([a-z]\.?)+[^\.]$/; str = 'abutaher267@gmail.com.com';
// reg = /^([a-z])+\.?([0-9]+)?[^\.]@([a-z]+\.?)([a-z]+\.?)[a-z]+[^\.]$/; str = 'abutaher267@gmail.com.bd'; //rule2 
//!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) formik email validaiton
reg = /^([a-z]\.?)+([0-9]+)?[^\.]@([a-z]+\.?)([a-z]+\.?)[a-z]+[^\.]$/; str = 'support.du.edu.343@edu.gov.bd'; 
//username regex:/^[a-z][-a-z0-9]*$/ //Must start with Alpha and allow hyphen-, a-z,0-9
///^[a-z][a-z0-9 ]*$/ alpha_num and whire space
//password /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/
//new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{6,12}$)")
console.log(reg.test(str));
// result = reg.exec(str);
// console.log(result);
// regex replaces all between the open and closed curly bracket
reg= /\{[^}]*\}/g;
// let str = `klfjsdkfjds{-whole-}fsjdfkjsdf`;

regTest();
function regTest(){
    if(reg.exec(str)) 
    // throw `'${str}' matches '${reg.source}'`;
    {console.log(`'${str}' matches '${reg.source}'`);}
    else{
        console.log(`'${str}' doesn't matches '${reg.source}'`);
    }
}


//Strong passwor and username
// https://prnt.sc/IYh1cMir4CB8
