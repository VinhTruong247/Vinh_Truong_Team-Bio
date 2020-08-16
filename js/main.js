(() => {console.log('FIRED!');

let button = document.querySelector(".info_button"),
    button1 = document.querySelector(".info_button1"),
    button2 = document.querySelector(".info_button2"),
    textContainer = document.querySelector(".text_container"),
    textContainer1 = document.querySelector(".text_container1"),
    textContainer2 = document.querySelector(".text_container2");

function showThatInfo(){
  textContainer.classList.toggle('text_container-toggled');
}
function showThatInfo1(){
  textContainer1.classList.toggle('text_container1-toggled');
}
function showThatInfo2(){
  textContainer2.classList.toggle('text_container2-toggled');
}

button.addEventListener('click', showThatInfo);
button1.addEventListener('click', showThatInfo1);
button2.addEventListener('click', showThatInfo2);
})();