//break

// for (let i = 1; i < 5; i++) {

//     console.log(i);
//     break;    
// }

// for (let i = 1; i < 5; i++) {
//     if (i==3) {
//         break; 
//     }
//     console.log(i);   
// }

// for (let i = 1; i < 5; i++) {
//     console.log(i);  
//     if (i==3) {
//         break; 
//     }
     
// }





//continue

// for (let i = 1; i <= 10; i++) {
//     if (i%2==0) {
//         // continue;
//         console.log(i);
//     }
    
     
// }


/**Grading */
// let x;
// x=prompt("Enter A number");
// x=parseInt(x);
// if (x>79 && x<=100) {
//     console.log(`${x} Your Grade: A+`);
// }else if(x>69){
//     console.log(`${x} Your Grade: A`);
// }else if (x>59) {
//     console.log(`${x} Your Grade: A-`);
// }else if (x>49) {
//     console.log(`${x} Your Grade: B`);
// }else if (x>39) {
//     console.log(`${x} Your Grade: C`);
// }else if (x>33) {
//     console.log(`${x} Your Grade: D`);
// }else{
//     console.log(`${x} Your Grade: invalid Input`);  
// }



// var x, y, z,a=null;
// x=prompt('Number1');
// y=prompt('Number2');
// z=prompt('oparetor');
// x=parseInt(x);
// y=parseInt(y);
// z=parseInt(z);
// let nx = isNaN(x);//return true or false
// let ny = isNaN(y);//return true or false
// let nz = isNaN(z);//return true or false

// if (nx || ny || nz) {
//     console.log('invalid input!');
// }else{
//     switch (z) {
//         case 1:
//             a = x+y;
//             break;
//         case 2:
//             a = x-y;
//             break;
//         case 3:
//             a = x*y;
//             break;
    
//         default:
//             a = x/y;
//             break;
//     }
//     if (a==null) {
//         console.log('There is no result');
//     }
//     else{
//         console.log(`Result : ${a}`);
//     }
// }


let n=parseInt(prompt('Enter a number'));
let sum=0, series ="";
if (isNaN(n)==true) {
    console.log("input Invalid");
}else{
for (let i = 1; i <= n; i++) {
    sum += i**2;
    series+=(i**2).toString();
    
    if (i==n) {
        continue;
    }
    series+="+ ";
}
console.log(series+" = "+sum);
    //1+2+3+4+......
    // for (let i = 1; i <=n; i++) {
    //     sum= sum+i;
    //     series+=(i).toString();
    //     if (i==n) {
    //         continue;
    //     }
    //     series+="+ ";
        
        
        
        
    // }
    // console.log(series+"="+sum);
}

