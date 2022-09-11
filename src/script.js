// -------------------Section 1 ---------------------------------- //
const google = document.querySelector('.google-logo');
const whatsapp = document.querySelector('.whatsapp-logo');
const figma = document.querySelector('.figma-logo');
function changeGoogle () {
    const hiddenClass = google.querySelector('.hidden');
    Array.from(google.children).forEach(el => el.classList.add('hidden'));
    hiddenClass.classList.remove('hidden');
}
function changeFigma () {
    const hiddenClass = figma.querySelector('.hidden');
    Array.from(figma.children).forEach(el => el.classList.add('hidden'));
    hiddenClass.classList.remove('hidden');
}
function changeWhatsapp () {
    whatsapp.querySelector('ion-icon').classList.toggle('change-whatsapp-color');
}
function changeAll(event) {
    changeGoogle();
    changeFigma();
    changeWhatsapp();
    console.log(event);
}