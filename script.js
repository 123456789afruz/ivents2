const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const img = document.querySelector('.img')
const text = document.querySelector('.text')
const body = document.querySelector('#body')



btn1.onclick = () => {
    body.classList.toggle('background')
}
btn2.onclick = () => {
    img.classList.toggle('hidden2')
   
    
}
btn3.onclick = () => {
    text.classList.toggle('hidden2')
}
btn4.onclick = () => {
    text.classList.toggle('color')
}


