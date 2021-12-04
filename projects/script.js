/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
 if(this.readyState == 4 && this.status == 200) {
     var data = this.responseText;
     jsonData(data);
 }
};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
function jsonData(json_obj) {
    let js_obj = JSON.parse(json_obj);
    // console.log(js_obj);
    for ( x in js_obj.persons ) {
        var person = js_obj.persons;
        // console.log(person[x]);
        for (y in person[x]) {
           console.log(person[x][y]); 
        }
        
    }
}
*/
document.getElementById('clickOn').addEventListener('click', jsonJoke);

function jsonJoke(e) {
    let num =parseInt(document.getElementById('jokenumber').value);
    
    if (isNaN(num) === false) {
        // console.log(isNaN(num));
       /* */
       var xhr = new XMLHttpRequest();
        xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true);
        xhr.onprogress = function () {
            document.querySelector('.listWrapper').innerHTML ='Loading...';   
        }
        xhr.onload = function () {
            if(this.status === 200 ){
                let data = JSON.parse(this.responseText);
                let joke = data.value;
                let output = '<ol>';
                joke.forEach(item => {
                    output +=`<li>${item.joke}</li>`;
                });
                output +='</ol>';
                document.querySelector('.listWrapper').innerHTML = output;
            }
            
        }
        
    xhr.send();
        /**/
    }else{
        document.querySelector('.listWrapper').innerHTML = 'মিয়া তুমি ফিজলিমা করো?';
    }
    e.preventDefault();
    
}

// 1205,1207,1208,1209,1212,1213,1215,1216,1217,1219,1229,1230,1261