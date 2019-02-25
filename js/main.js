'use strict';

window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function (page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
};

var content = document.querySelector('ons-splitter-content');

content.load('logud.html');

//listen af hunde 

fetch('json/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendAnimals(json);
    });

function appendAnimals(animals) {
    let htmlTemplate = "";
    for (let animal of animals) {
        console.log(animals);
        htmlTemplate += `<div>
            <div class="imgContainer"><span onclick="fn.load('ejersdyrprofil.html')" tappable><img src="img/${animal.img}"></span></div>
            <h3>${animal.name}</h3>
            <div class="textContainer"> 
            <p>${animal.race}</p>
            <p>${animal.age}</p></div>
            </div>`;
    }

    let avlspertnerContent = document.getElementById('sg_avlspartner.html').content;
    avlspertnerContent.querySelector('#gridAnimals').innerHTML = htmlTemplate;
}

//en ny for inde i denne funktion, så der loops igennem billederne


//knap på søg avlspartner siden!!
let showToast = function () {
    ons.notification.toast('Filter muligheder kommer senere!', {
        timeout: 2000
    });
};

// alert buttons
function btnalert1() {
    

swal.fire({
  title: 'Skriv en anbefaling',
  input: 'text',
  imageUrl: 'img/bubble.png',
  confirmButtonText: 'Send',
	confirmButtonColor: '#58c4c8',
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    swal.fire(
	
	  'Sendt!',
      ' ',
      'success'
		
	);
	  setTimeout(function(){ 
	  	swal.close();
	  }, 1500);
	  
  } 
})
}

function btnalert2() {
    Swal.fire({
        text: 'Du gav brugeren et like',
        imageUrl: 'img/like.png',
        imageWidth: 72,
        imageHeight: 60,
        animation: false,
		timer: 1500,
		showConfirmButton: false,
    })
}

function btnalert3() {
    Swal.fire({
        text: 'Brugeren blev tilføjet til dine favoritter',
        imageUrl: 'img/favorit2.png',
        imageWidth: 63,
        imageHeight: 60,
        animation: false,
		timer: 1500,
		showConfirmButton: false,
    })
}

// loginfuktion

function pasuser(form) {
if (form.id.value=="test") { 
if (form.pass.value=="test") {              
location="opret_dyr.html" 
} else {
alert("Forkert adgangskode")
}
} else {  alert("Forkert brugernavn eller adgangskode")
}
}