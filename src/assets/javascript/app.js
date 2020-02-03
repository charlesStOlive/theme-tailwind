/*
 * Needed for October's framework
 */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
/*
* Application
*/
console.log($)

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var logo = document.getElementById("logo_talktob");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");
var logoToToggle = document.querySelectorAll(".toggleLogo");
var toAnimate = document.querySelectorAll(".toAnimate");

for (var i = 0; i < toAnimate.length; i++) {
    toAnimate[i].classList.add('hidden');
}

document.addEventListener('scroll', function () {

    /*Apply classes for slide in bar*/
    scrollpos = window.scrollY;

    if (scrollpos > 10) {
        header.classList.add("bg-white");
        navaction.classList.remove("bg-secondary");
        navaction.classList.add("bg-primary");
        // logo.classList.remove('fill-secondary');
        // logo.classList.remove('stroke-secondary');
        // logo.classList.add('fill-primary');
        // logo.classList.add('stroke-primary');

        // navaction.classList.remove("text-gray-800");
        // navaction.classList.add("text-white");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
        }
        for (var i = 0; i < toAnimate.length; i++) {
            var anime = isAnyPartOfElementInViewport(toAnimate[i]);
            console.log(anime);
            if (anime) {
                toAnimate[i].classList.remove('hidden');
                toAnimate[i].classList.add('animated');
                toAnimate[i].classList.add('fadeIn');
                toAnimate[i].classList.add('delay-' + i);
            }
        }
        for (var i = 0; i < logoToToggle.length; i++) {
            logoToToggle[i].classList.remove("fill-secondary");
            logoToToggle[i].classList.remove("stroke-secondary");
            logoToToggle[i].classList.add("fill-primary");
            logoToToggle[i].classList.add("stroke-primary");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
    }
    else {
        header.classList.remove("bg-white");
        navaction.classList.remove("bg-primary");
        navaction.classList.add("bg-secondary");
        // logo.classList.add('fill-secondary');
        // logo.classList.add('stroke-secondary');
        // logo.classList.remove('fill-primary');
        // logo.classList.remove('stroke-primary');
        // navaction.classList.remove("text-gray-800");
        // navaction.classList.add("text-white");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
        }
        for (var i = 0; i < logoToToggle.length; i++) {
            logoToToggle[i].classList.add("fill-secondary");
            logoToToggle[i].classList.add("stroke-secondary");
            logoToToggle[i].classList.remove("fill-primary");
            logoToToggle[i].classList.remove("stroke-primary");
        }

        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");

    }

});

/*Toggle dropdown list*/
/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
    var target = (e && e.target) || (event && event.srcElement);

    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("hidden")) {
                navMenuDiv.classList.remove("hidden");
            } else { navMenuDiv.classList.add("hidden"); }
        } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("hidden");
        }
    }

}
function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) { return true; }
        t = t.parentNode;
    }
    return false;
}


/**
 * ANIMATION
 */
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        //node.classList.remove('animated', animationName)
        //node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}

function isAnyPartOfElementInViewport(el, marge = 150) {

    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight - marge || document.documentElement.clientHeight - marge);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

