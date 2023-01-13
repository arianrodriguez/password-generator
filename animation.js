const scroll_options = document.querySelector('.scroll-options');
const slider = document.querySelector('#range-length');

function show_options() {
    const content = document.querySelector('.content-options');
    content.style.cssText = `
        display: block;
    `
    scroll_options.innerHTML = '<i class="fa-sharp fa-solid fa-arrow-up"></i>';
}
function hide_options() {
    const content = document.querySelector('.content-options');
    content.style.cssText = `
        display: none;
    `
    scroll_options.innerHTML = '<i class="fa-sharp fa-solid fa-arrow-down"></i>';
}
function change_value_slider() {
    const value_slider = document.querySelector('.label-length');
    value_slider.textContent = slider.value;
}


scroll_options.addEventListener('click', (e)=>{
    e.stopPropagation();

    const arrow = document.querySelector('.scroll-options i');
    if(arrow.className == 'fa-sharp fa-solid fa-arrow-down') show_options();
    else hide_options();
});
