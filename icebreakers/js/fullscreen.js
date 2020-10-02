document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;

function enterFullscreen(id) {
    var el = document.getElementById(id);
    el.classList.add('fullscreen-mode');

    var onfullscreenchange = function(e) {
        var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
        var fullscreenEnabled = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled;

        if (fullscreenElement == null && fullscreenEnabled) {
            jQuery(document).find('#game-wrapper').removeClass('fullscreen-mode')
        }
    }

    el.addEventListener("RequestFullScreen", onfullscreenchange);
    el.addEventListener("webkitfullscreenchange", onfullscreenchange);
    el.addEventListener("mozfullscreenchange", onfullscreenchange);
    el.addEventListener("fullscreenchange", onfullscreenchange);

    if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen();
    } else {
        el.mozRequestFullScreen();
    }

    jQuery('#fullscreen-exit').click(function() {
        var elem = jQuery(document).find('#game-wrapper');
        elem.removeClass('fullscreen-mode')
        document.exitFullscreen()
    })
}

jQuery('.fullscreen').click(function() {
    enterFullscreen('game-wrapper');
})

window.onload = function() {
    setTimeout(function() {
        jQuery('#preloader').fadeOut(500);
    }, 30000);
}