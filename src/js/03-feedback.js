import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    btn: document.querySelector('.feedback-form button'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

formInfo();


function onFormSubmit(event) {
    console.log({email: refs.email.value, message: refs.message.value});
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
    const formData = JSON.stringify({email: refs.email.value, message: refs.message.value})
    localStorage.setItem(STORAGE_KEY, formData);
}

function formInfo() {
    const saveInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveInfo) {
        refs.email.value = saveInfo.email;
        refs.message.value = saveInfo.message;
    }
}




