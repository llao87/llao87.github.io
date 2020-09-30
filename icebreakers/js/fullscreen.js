document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;

// function onFullScreenEnter() {
//   console.log("Enter fullscreen initiated from iframe");
// };

// function onFullScreenExit() {
//   console.log("Exit fullscreen initiated from iframe");
// };

// Note: FF nightly needs about:config full-screen-api.enabled set to true.
function enterFullscreen(id) {
    // onFullScreenEnter(id);
    var el = document.getElementById(id);
    var onfullscreenchange = function(e) {
        // var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
        // var fullscreenEnabled = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled;
        // console.log( 'fullscreenEnabled = ' + fullscreenEnabled, ',  fullscreenElement = ', fullscreenElement, ',  e = ', e);
    }

    // el.addEventListener("RequestFullScreen",      onfullscreenchange);
    el.addEventListener("webkitfullscreenchange", onfullscreenchange);
    el.addEventListener("mozfullscreenchange", onfullscreenchange);
    el.addEventListener("fullscreenchange", onfullscreenchange);

    if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
        el.mozRequestFullScreen();
    }
    // document.querySelector('#'+id + ' button').onclick = function(){
    //   exitFullscreen(id);
    // }
}

jQuery('.fullscreen').click(function() {
    enterFullscreen('game-wrapper');
})

// jQuery('#new-review').click(function(e) {
//   e.preventDefault();
//   jQuery('#popup-review').stop().fadeIn(300);
// })



window.onload = function() {
    setTimeout(function() {
        jQuery('#preloader').fadeOut(500);
    }, 30000);
}