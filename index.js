
// btn.onclick = function() {
//     console.log('click from index.js');
// }
// btn.onmouseover = function() {
//     console.log('click from index.js')
// }
// btn.onmousedown = function() {
//     console.log('click from index.js')
// }

const getDomElement = selector => document.querySelector(selector);
const btn = getDomElement('.btn');
const input = getDomElement('.input');

input.oninput = (e) => {
    console.log('Change')
    if(e.target.value > 20){
    e.target.classList.add('input__danger');
} else if (
    e.target.classList.contains('input__danger') &&
    e.target.length <= 20
) {
    e.target.classList.add('input__focused')
    e.target.classList.remove('input__danger')
}

input.onfocus = (e) => {
    console.log('Focus')
    console.log(e)
    e.target.classList.toggle('input__focused')
    // input.classList.add('input__focused')
}
input.onblur = (e) => {
    console.log('Blur')
    console.log(e)
}