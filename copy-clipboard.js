const icon_copy = document.querySelector('.icon-copy-pass i');

icon_copy.addEventListener('click', ()=> {
    const pass = document.querySelector('.output-pass').textContent;
    if(navigator && navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(pass);
    else alert('The clipboard API no está disponible en este navegador');
});