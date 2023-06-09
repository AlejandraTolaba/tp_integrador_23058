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

const ticket_value = 200;
var total = 0;
var subtotal;
function getSubtotal(){
    subtotal = 0;
    console.log(subtotal);
    switch (category.value) {
        case 'E':
            subtotal = ticket_value * (1 - 0.8);
            console.log(subtotal);
            break;
        case 'T':
            subtotal = ticket_value * (1 - 0.5);
            break;
        case 'J':
            subtotal = ticket_value * (1 - 0.15);
            break;
        default:
            subtotal = ticket_value;
            break;
    }
    
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
    }
}

btn_resumen.addEventListener('click', validar);
category.addEventListener('change',getSubtotal);
btn_resumen.addEventListener('click', () => {
    // getSubtotal();
    total = quantity.value * (subtotal.toFixed(2));
    console.log(total);
    text_total.textContent = 'Total a Pagar: $'+total;
});

btn_reset.addEventListener('click', () =>{
    text_total.textContent = 'Total a Pagar: $';
})