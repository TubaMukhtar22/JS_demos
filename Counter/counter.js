const decBtn = document.getElementById("decreaseBtn");
const resBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("increaseBtn");
const counter = document.getElementById("counterlabel");
let count = 0;
decBtn.onclick=function(){
    count--;
    counter.textContent = count;
}
 incBtn.onclick=function(){
    count++;
    counter.textContent = count;
}
resBtn.onclick = function () {
    count = 0;
    counter.textContent = count;
 }