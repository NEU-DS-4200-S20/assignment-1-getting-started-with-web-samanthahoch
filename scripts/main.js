let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/silk-image.png') {
      myImage.setAttribute ('src','images/silk-image2.png');
    } else {
      myImage.setAttribute ('src','images/silk-image.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName == null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to the Test Website, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
   setUserName();
 } else {
   let storedName = localStorage.getItem('name');
   myHeading.textContent = 'Welcome to the Test Website, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
