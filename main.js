const input_name = document.querySelector('.input-name');
const input_lastname = document.querySelector('.input-lastname');
const input_email = document.querySelector('.input-email');
const name_tooltip = document.querySelector('.name-tooltip');
const lastname_tooltip = document.querySelector('.lastname-tooltip');
const email_tooltip = document.querySelector('.email-tooltip');
const btn_resumen = document.querySelector('.btn-resumen');
const btn_reset = document.querySelector('.btn-reset');
const quantity = document.querySelector('#inputQuantity');
const category = document.querySelector('#inputCategory');
const text_total = document.querySelector('.alert');

const discount_E = 0.8;
const discount_T = 0.5;
const discount_J = 0.15;

const ticket_value = 200;
var total = 0;
var subtotal;

function getSubtotal(){
    subtotal = 0;
    console.log(subtotal);
    switch (category.value) {
        case 'E':
            subtotal = ticket_value * (1 - discount_E);
            break;
        case 'T':
            subtotal = ticket_value * (1 - discount_T);
            break;
        case 'J':
            subtotal = ticket_value * (1 - discount_J);
            break;
        default:
            subtotal = ticket_value;
            break;
    }
    
}

function getTotal(){
    total = Math.round(quantity.value * subtotal);
    // console.log(total);
    text_total.textContent = 'Total a Pagar: $'+total;
}

function validar (e) {
    e.preventDefault();
    if (input_name.value == '' && input_lastname.value == '' && input_email.value == '') {
        input_name.classList.add('is-invalid');
        name_tooltip.classList.add('d-block');
        input_lastname.classList.add('is-invalid');
        lastname_tooltip.classList.add('d-block');
        input_email.classList.add('is-invalid');
        email_tooltip.classList.add('d-block');
    } 
    else if (input_name.value != '' && input_lastname.value == '' && input_email.value == '') {
        input_name.classList.remove('is-invalid');
        name_tooltip.classList.remove('d-block');
        input_lastname.classList.add('is-invalid');
        lastname_tooltip.classList.add('d-block');
        input_email.classList.add('is-invalid');
        email_tooltip.classList.add('d-block');
    } 
    else if (input_name.value != '' && input_lastname.value != '' && input_email.value == ''){
        input_name.classList.remove('is-invalid');
        name_tooltip.classList.remove('d-block');
        input_lastname.classList.remove('is-invalid');
        lastname_tooltip.classList.remove('d-block');
        input_email.classList.add('is-invalid');
        email_tooltip.classList.add('d-block');
        
    }
    else if (input_name.value != '' && input_lastname.value == '' && input_email.value != ''){
        input_name.classList.remove('is-invalid');
        name_tooltip.classList.remove('d-block');
        input_lastname.classList.add('is-invalid');
        lastname_tooltip.classList.add('d-block');
        input_email.classList.remove('is-invalid');
        email_tooltip.classList.remove('d-block');
    }
    else if (input_name.value == '' && input_lastname.value != '' && input_email.value != ''){
        input_name.classList.add('is-invalid');
        name_tooltip.classList.add('d-block');
        input_lastname.classList.remove('is-invalid');
        lastname_tooltip.classList.remove('d-block');
        input_email.classList.remove('is-invalid');
        email_tooltip.classList.remove('d-block');
    }
    else if (input_name.value == '' && input_lastname.value == '' && input_email.value != ''){
        input_name.classList.add('is-invalid');
        name_tooltip.classList.add('d-block');
        input_lastname.classList.add('is-invalid');
        lastname_tooltip.classList.add('d-block');
        input_email.classList.remove('is-invalid');
        email_tooltip.classList.remove('d-block');
    }
    else if (input_name.value == '' && input_lastname.value != '' && input_email.value == ''){
        input_name.classList.add('is-invalid');
        name_tooltip.classList.add('d-block');
        input_lastname.classList.remove('is-invalid');
        lastname_tooltip.classList.remove('d-block');
        input_email.classList.add('is-invalid');
        email_tooltip.classList.add('d-block');
    }
    else{
        input_name.classList.remove('is-invalid');
        name_tooltip.classList.remove('d-block');
        input_lastname.classList.remove('is-invalid');
        lastname_tooltip.classList.remove('d-block');
        input_email.classList.remove('is-invalid');
        email_tooltip.classList.remove('d-block');
        getSubtotal();
        getTotal();
    }
}

function removeClasses(e){
    let elem = e.currentTarget;
    let elem_id = e.currentTarget.id;
    let tooltip = elem_id+'_tooltip';
    elem.classList.remove('is-invalid');
    switch (tooltip) {
        case 'name_tooltip':
            name_tooltip.classList.remove('d-block');
            break;
        case 'lastname_tooltip':
            lastname_tooltip.classList.remove('d-block');
            break;
        case 'email_tooltip':
            email_tooltip.classList.remove('d-block');
            break;
        default:
            break;
    }
}

input_name.addEventListener('input', removeClasses);
input_lastname.addEventListener('input', removeClasses);
input_email.addEventListener('input', removeClasses);

btn_resumen.addEventListener('click', validar);
category.addEventListener('change',getSubtotal);
// btn_resumen.addEventListener('click', getTotal);

btn_reset.addEventListener('click', () =>{
    text_total.textContent = 'Total a Pagar: $';
})