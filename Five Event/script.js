let btn= document.querySelector('#click-me').addEventListener('mousemove',message);

function message(e){
    // this.style.with="100%";
    // console.log(e.target.className);
    // console.log(e);
    // console.log(this.style.background = `#${e.offsetX}`);
}


document.querySelector('#text-field').addEventListener( "focus",fieldEvent);

function fieldEvent(e){
    this.classList.add('form-control');
    this.style.color='red'
}

document.querySelector('#text-field').addEventListener('keyup',fieldEvent);

function fieldEvent(e){
    let val = document.querySelector('h2').innerText =this.value;
    console.log(val);
}