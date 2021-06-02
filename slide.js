const box = document.querySelector('.box');
const input = document.querySelector('input');
const box1 = document.querySelector('.box1');
const input1 = document.querySelector('.input1');

input.addEventListener('click' , ()=>{
    box.classList.toggle('boxes');
})

box.addEventListener('click' , ()=>{
    box.classList.toggle('boxes');
})

input1.addEventListener('click' , ()=>{
    box1.classList.toggle('boxes');
})

box1.addEventListener('click' , ()=>{
    box1.classList.toggle('boxes');
})