let b1=document.querySelector('#b1');
let b2=document.querySelector('#b2');
let bulb=document.querySelector('#bulb');

b1.addEventListener('click',lightOn);
b2.addEventListener('click',lightOff);

function lightOn(){
    var pic;
    pic="img/on.png";
    bulb.src=pic;
}

function lightOff(){
    var pic;
    pic="img/of.png";
    bulb.src=pic;
    
}