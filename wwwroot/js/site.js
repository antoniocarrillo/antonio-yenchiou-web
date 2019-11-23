// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

const navigation_links = document.getElementsByClassName('navigation-link');

function clickHamburger() {
    document.getElementById('hamburger').checked = false;
}

for (var i = 0; i < navigation_links.length; i++) {
    navigation_links[i].addEventListener('click', clickHamburger, false);
}
