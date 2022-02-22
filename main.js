let total = 0;

document.querySelector('#pumpkin').addEventListener('click', makezero);
document.querySelector('#pumpkin').addEventListener('click', pink);
document.querySelector('#dominosPizza').addEventListener('click', plus3);
document.querySelector('#dominosPizza').addEventListener('click', blue);
document.querySelector('#zebra').addEventListener('click', plus9);
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2);
document.querySelector('#pepperoni').addEventListener('click', sub5);




function makezero(){
  total = 0;
  document.getElementById('placeToPutResult').innerText = total;
}

function pink(){
  document.querySelector('body').style.backgroundColor = "pink";
}

function plus3(){
  total += 3;
  document.getElementById('placeToPutResult').innerText = total;
}

function blue(){
  document.querySelector('body').style.backgroundColor = "blue";
}

function plus9(){
  total += 9;
  document.getElementById('placeToPutResult').innerText = total;
}

function sub2(){
  total -= 2;
  document.getElementById('placeToPutResult').innerText = total;
}

function sub5(){
  total -= 5;
  document.getElementById('placeToPutResult').innerText = total;
}
