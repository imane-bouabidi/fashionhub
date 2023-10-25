const inputs = document.querySelectorAll('input');

const patterns ={
    telephone: /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w\W@-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i,
}
console.log(inputs)

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className='valid';
    }else{
        field.className='invalid';
    }
}

inputs.forEach((input)=> {
    input.addEventListener('keyup',(e)=> {
        validate(e.target,patterns[e.target.attributes.name.value])
    });
});


/* ****************Burger menu**************** */


const menu =document.getElementById('burger-menu')
const head =document.getElementById('head')

head.classList.add('appear')
menu.onclick = function(){
    head.classList.toggle('appear')
}




