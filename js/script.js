const buttonMen = document.querySelector('.header__button-gender-men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const body = document.body;


const state = {
    gender: body.classList.contains('women') ? 'women' : 'men',
}

const changeToMan = () => {
    if(state.gender !== 'men') {
        body.classList.add('men');
        body.classList.remove('women');
        state.gender = ' men';
    }
}; 

const changeToWoman = () => {
    if (state.gender !== 'woman') {
        body.classList.add('women');
        body.classList.remove('men');
        state.gender = 'woman';
    }
};   


buttonMen.addEventListener('click', changeToMan);
buttonWomen.addEventListener('click', changeToWoman);