const output = document.querySelector('.output-pass');
const btn_generate = document.querySelector('.btn-generate');

function random(min,max) {
    return Math.round(Math.random()*(max-min)+min);
}
function simbols_generated() {
    const simbol = ['!', '#', '$', '%', '&', '/', '(', ')', '.', '^'];
    return simbol[random(0,simbol.length-1)];
}
function fill_pass(length) {
    let pass = [];
    for(let i=0; i<length; ++i) pass.push(0);
    return pass;
}
function display_pass(pass) {
    output.textContent = pass.join``;
}
function generate_pass(){
    const length = document.querySelector('#range-length');
    const digits = document.querySelector('#numbers');
    const simbols = document.querySelector('#caracter-special');
    const up_lett = document.querySelector('#uppercase-letters');
    const low_lett = document.querySelector('#lowercase-letters');
    let pass_generated = fill_pass(parseInt(length.value));

    
    for(let i=0; i<parseInt(length.value); ++i){

        while(pass_generated[i]==0){
            switch(random(0,3)) {
                case 0: 
                    if(digits.checked){
                        pass_generated[i] = (random(0,9)).toString();
                        break;
                    }
                case 1: 
                    if(simbols.checked) {
                        pass_generated[i] = simbols_generated();
                        break;
                    }
                case 2:
                    if(up_lett.checked) {
                        pass_generated[i] = (String.fromCharCode(random(97,122))).toUpperCase();
                        break;
                    }
                case 3: 
                    if(low_lett.checked) {
                        pass_generated[i] = String.fromCharCode(random(97,122));
                        break;
                    }
                default: break;
            }
        }
    }
    display_pass(pass_generated);
}

btn_generate.addEventListener('click', generate_pass);
/*genere una contraseña apenas se inicie la página web (DOMContentLoaded=>el árbol html ha cargado correctamente) */
document.addEventListener('DOMContentLoaded', generate_pass);