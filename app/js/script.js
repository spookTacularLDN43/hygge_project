const headerBars = document.getElementById('headerBars'); 
const header = document.querySelector('.header'); 
const headerMenu = document.querySelector('.header_menu'); 
headerBars.addEventListener('click', function(){

    if(header.classList.contains('open')){
        header.classList.remove('open'); 
    }else{
        header.classList.add('open'); 
    }
})