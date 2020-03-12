//Fonctions en Javascript

//Fonction permettant l'affichage de la navbar: elle sera fixe sur l'ensemble du site, transparente sur la première partie du site puis opaque
$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > $(this).height()) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});

// Fonction permettant d'insérer les modal bootstrap (pour l'affichage des vidéos)
$(document).ready(function () {
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $('#myModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
});


