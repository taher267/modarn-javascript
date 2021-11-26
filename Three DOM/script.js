let val;
val=document.getElementsByClassName('d-block');
// val[1].style.background="red";
let listArr = Array.from(val);
listArr.forEach((item) => {
    // console.log(item);
});

val = document.getElementsByTagName('li');
Array.from(val).forEach((it)=>{
    // it.style.color="purple";
});

val = document.querySelector('ol').getElementsByTagName('li');
let list;
list= document.querySelectorAll('.d-block li');
list= document.querySelectorAll('.d-block li:nth-child(odd)');
list.forEach((it)=>{
    // it.style.background='red';
    // it.style.display='inline-block';
    // it.textContent='demotext';
});

//traversing The DOM
list = document.querySelector('ol');
let listItem = document.querySelector('ol li:first-child');

/**Get the child nodes */
val = list;
val = list.childNodes;

// val.childNodes

// val = list.childNodes[0].nodeName;
// console.log(val[1].nodeType);
/**it is showing #text for keyboard Ender */

/**Node Type
 * 1 Element
 * 2 Attribute
 * 3 Text Node
 * 8 Comment
 * 9 Document itself
 * 10 doctype
 */
/**Less text nodes */
val = list.children
// val = val[1]
val[1].textContent='\'Allalh\''
// val = val[2].children[0].attributes[0];
val = val[2].children[0].attributes.href;
val =list.firstChild;
val =list.firstElementChild.children[0].attributes.href;
val =list.lastElementChild;
val= list.childElementCount;
val =list.parentElement;
val =list.parentElement.previousElementSibling.textContent='it is changed by his siblings';
console.log(val);


