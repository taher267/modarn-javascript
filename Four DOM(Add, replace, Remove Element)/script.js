// Adding Element to DOM
//Create Element
let olItem= document.createElement('li');
olItem.className="ol-list";
olItem.id="ol-list";
olItem.setAttribute('title','this is OL new list title');
let olItemA = document.createElement('a');
olItemA.className='text-success';
olItemA.setAttribute('role','alert');
olItemA.setAttribute('href','#');
olItem.appendChild(document.createTextNode('li'));
// olItemA.
olItemA.appendChild(document.createTextNode(' Bismllah'));
olItem.appendChild(olItemA)
document.querySelector('ol').appendChild(olItem);

// let olI2 = document.createElement('li');
// olI2.setAttribute('class','bg-danger');
// olI2.appendChild();
// olI2.setAttribute('class', 'btn btn-success');
// // olI2.

// // console.log(olItem);
// let ulItem = document.createElement('li');
// let ulItemA = document.createElement('a');
// ulItemA.setAttribute('class','text-danger');
// ulItemA.appendChild( document.createTextNode('Alhamdu Lillah2 ') );
// ulItem.appendChild( ulItemA )
// document.querySelector('ul').appendChild(ulItem);

// console.log(olI2);

let newTag = document.createElement('h2');
newTag.appendChild(document.createTextNode("Bismillahir Rohmanir Rohim"));
newTag.setAttribute('class','text-warning');
document.querySelectorAll('.col-xl-12')[0].querySelector('ol').parentNode.appendChild(newTag)
// document.querySelector('.container .row').appendChild(newTag);

//Remove element

let allLi = document.querySelectorAll('li');
let OlLi = document.querySelector('ol');
OlLi.removeChild(allLi[1]);
// allLi[5].remove()


// console.log(OlLi);