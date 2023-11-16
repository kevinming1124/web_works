var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName == null) {
    setUserName();
    } else {
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Dr. strange is cool, ' + myName;
    }
  }
  



myButton.onclick = function() {
    setUserName();
  }
  

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/smile.jpg') {
      myImage.setAttribute ('src','images/smile2.jpg');
    } else {
      myImage.setAttribute ('src','images/smile.jpg');
    }
}
