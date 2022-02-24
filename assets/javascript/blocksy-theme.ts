jQuery((function($) {
    window.setTimeout(function() {
        let cajaImagenes = jQuery("div.flexy-items");
        let cajaVideos;
        let galeriaMiniaturas = jQuery(".flexy-pills").children("ol");
        let miniaturaImagen = galeriaMiniaturas.children("li");
        let miniaturaVideo;

        let videosProducto = jQuery(".video_para_galeria_woocommerce");

        videosProducto.each(
            function anadirVideo() {

                // Anadir un Thumbail
                miniaturaVideo = miniaturaImagen.last().clone(true)
                miniaturaVideo.children("span").attr("aria-label", `Diapositiva ${miniaturaImagen.length +1}`);
                miniaturaVideo.appendTo(galeriaMiniaturas);


                // Anadir video a la cola de imagenes

                cajaVideos = cajaImagenes.children("div").last().clone(true)
                cajaVideos.html(jQuery(this).children().html())
                cajaVideos.children("video").attr("width", "600px").attr("height", "600px").css("margin-top", "-100px").css("background-color", "white")
                jQuery(this).hide();
                cajaVideos.appendTo(cajaImagenes);
            })
    }, 250)
})