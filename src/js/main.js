const cookieButton = document.querySelector('.cookie-buttonn')
const cookieBar = document.querySelector('.cookie-bar') 

function hideCookieBar() {
    cookieBar.style.display = "none";
    cookieBar.setAttribute('aria-hidden', true);
}

function showCookieBar() {
    cookieBar.style.display = "flex";
    cookieBar.setAttribute('aria-hidden', false);
}

if (!localStorage.getItem('cookie')) {
    showCookieBar();
}

cookieButton.addEventListener('click', () => {
    hideCookieBar();
    localStorage.setItem('cookie', 'allowed');
});
