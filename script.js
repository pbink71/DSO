// script.js
var player; // Declare a global variable to hold the YouTube player instance


function onYouTubeIframeAPIReady() {
    // Initialize YouTube videos
    $('.youtube-video').each(function () {
        var youtubeId = $(this).data('youtube-id');
        player = new YT.Player(this, {
            videoId: youtubeId,
            playerVars: {
                'autoplay': 0, // 1 for autoplay
                'rel': 0, // 0 to hide related videos
                'showinfo': 0 // 0 to hide the video title and uploader info
            }
        });
    });
}

$(document).ready(function(){
    // Initialize Videos Carousel
    $('.videos-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Set the autoplay speed in milliseconds
        arrows: true,
        dots: true
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var pathName = window.location.pathname;
    var currentPage = pathName.substring(pathName.lastIndexOf('/') + 1);

    var activeLink = document.getElementById(currentPage + '-link');
    if (activeLink) {
        activeLink.classList.add('active');
    }
});
