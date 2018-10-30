var circles = document.querySelector('.circle');
var textOnClick = document.querySelector('.click');
var textOnDblClick = document.querySelector('.dblclick');
var userName = document.querySelector('.userName');
var tab; 
var tabContent; 

window.onload = askName();

function askName() {
    var name = prompt('What is your name?');
    userName.textContent = name;
}

circles.addEventListener('mouseover', function() {
    circles.style.backgroundColor = 'lightblue';
});

circles.addEventListener('mouseout', function() {
    circles.style.backgroundColor = 'purple';
});

circles.addEventListener('click', function() {
    textOnDblClick.textContent = ''
    textOnClick.textContent = 'Hmmm... It seems like you click...'
    
})

circles.addEventListener('dblclick', function() {
    textOnClick.textContent = ''
    textOnDblClick.textContent = 'Hmmm... Now you click twice...'
})


 
window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('selected');
    }
}
document.getElementById('tabs').onclick= function (e) {
    var target = e.target;
    if (target.className == 'tab') {
       for (var i = 0; i < tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
}}}}

function showTabsContent(j){
    if (tabContent[j].classList.contains('hide')) {
        hideTabsContent(0);
        tab[j].classList.add('selected');
        tabContent[j].classList.remove('hide');
        tabContent[j].classList.add('show');
    }
}