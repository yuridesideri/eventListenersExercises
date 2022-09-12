//-------------------Change-Pages --------------------------------//
function changePage(direction)
{
    const navButtons = document.querySelector('.change-section-buttons');
    navButtons.classList.add('lock-event');
    const loadedPage = document.querySelector('.loaded');
    const pageNum = parseInt(loadedPage.getAttribute('name').split('-')[1]);
    const numOfPages = Array.from(document.querySelectorAll('.page')).reduce((acc, el) => acc+=1, 0);
    let nextPage;
    if (direction === 'right')
    {
        if (pageNum === numOfPages)
        {
            nextPage = document.querySelector(`[name=page-${1}]`);
        }
        else{
            nextPage = document.querySelector(`[name=page-${pageNum + 1}]`);
        }
        nextPage.style.zIndex = '10';
        loadedPage.style.zIndex = '9';
        nextPage.classList.remove('hidden');
        nextPage.classList.add('move-page-right-new');
        loadedPage.classList.add('move-page-right-old');
    }
    else if (direction === 'left')
    {
        if (pageNum === 1)
        {
            nextPage = document.querySelector(`[name=page-${numOfPages}]`);
        }
        else{
            nextPage = document.querySelector(`[name=page-${pageNum - 1}]`);
        }
        nextPage.style.zIndex = '10';
        loadedPage.style.zIndex = '9';
        nextPage.classList.remove('hidden');
        nextPage.classList.add('move-page-left-new');
        loadedPage.classList.add('move-page-left-old'); //Adicionar hidden e remover classes
    }
    else{
        console.log('Entered wrong direction argument');
    }
    setTimeout(() => {nextPage.classList.remove('move-page-left-new');
    nextPage.classList.remove('move-page-right-new');
    nextPage.classList.add('loaded');
    nextPage.removeAttribute('style');
    loadedPage.classList.add('hidden');
    loadedPage.classList.remove('loaded');
    loadedPage.classList.remove('move-page-left-old');
    loadedPage.classList.remove('move-page-right-old');
    loadedPage.removeAttribute('style');
    navButtons.classList.remove('lock-event');

}, 2000)
}




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


//-------------------------Section 2------------------------------//
putEventListenersOnChildrenInRealTime();

function change() {
    const color = '#FFFFFF';
    test.style.backgroundColor = color;
}

function putEventListenersOnChildren () {
    const elements = Array.from(document.querySelectorAll('.event-direction-children'));
    elements.forEach(el => {el.addEventListener('click', (e) => colorizeAnimation(el));
                el.addEventListener('click', (e) => {colorizeAnimation(el)}, true);})
}


function colorizeAnimation(element){
    let randomNumberRGB = () => Math.round(Math.random()*255);
    const randomColor = `rgba(${randomNumberRGB()},${randomNumberRGB()},${randomNumberRGB()})`;
    element.style.backgroundColor = randomColor;
    setTimeout( () => element.removeAttribute('style'), 1200);
}



function putEventListenersOnChildrenInRealTime () {
    const parentElement = document.querySelector('.event-direction-container');
        function getElements(e, parent){
            let counter = 0;
            let tmpNode = parent;
            let interval = setInterval ( () => {
                tmpNode = tmpNode.children[0];
                colorizeAnimation(tmpNode);
                counter++;
                if (tmpNode === e.target)
                {
                    clearInterval(interval);
                    interval = setInterval ( () => {console.log(tmpNode);
                                tmpNode = tmpNode.parentNode;
                                colorizeAnimation(tmpNode);
                                counter++;
                                if (tmpNode === parent.children[0])
                                {
                                    clearInterval(interval);
                                }}, 1200);
                }
            }, 1200);
        } 
    parentElement.addEventListener('click',(e) => getElements(e, parentElement));
}














//--------------------Section 3 ---------------------------------//

function solutionPage3 (){
    const container = document.querySelector('.page-3-container');
    container.addEventListener('click', (e) => colorizeAnimation(e.target));
}


