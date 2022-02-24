jQuery((function ($) {
    var Imagenes = /** @class */ (function () {
        function Imagenes(claseCaja, claseMiniaturas) {
            this.cajaImagenes = jQuery("div.".concat(claseCaja));
            this.galeriaMiniaturas = jQuery(".".concat(claseMiniaturas, " > ol"));
            this.miniaturaImagen = jQuery(".".concat(claseMiniaturas, " ol > > li"));
        }
        return Imagenes;
    }());
    var Videos = /** @class */ (function () {
        function Videos(claseVideo) {
            this.videosProducto = jQuery(".".concat(claseVideo));
        }
        return Videos;
    }());
    var blocksyImagenes = new Imagenes("flexy-items", "flexy-pills");
    var blocksyVideos = new Videos("video_para_galeria_woocommerce");
    var e = 100;
    window.setTimeout(function () {
        blocksyVideos.videosProducto.each(function anadirVideo() {
            // Anadir un Thumbail
            blocksyVideos.miniaturaVideo = blocksyImagenes.miniaturaImagen.last().clone(true);
            blocksyVideos.miniaturaVideo.children("span").attr("aria-label", "Diapositiva ".concat(blocksyImagenes.miniaturaImagen.length + 1));
            blocksyVideos.miniaturaVideo.appendTo(blocksyImagenes.galeriaMiniaturas);
            // Anadir video a la cola de imagenes
            blocksyVideos.cajaVideos = blocksyImagenes.cajaImagenes.children("div").last().clone(true);
            blocksyVideos.cajaVideos.html(jQuery(this).children().html());
            blocksyVideos.cajaVideos.children("video").attr("width", "600px").attr("height", "600px").css("margin-top", "-100px").css("background-color", "white");
            jQuery(this).hide();
            blocksyVideos.cajaVideos.appendTo(blocksyImagenes.cajaImagenes);
        });
    }, e);
}));
//# sourceMappingURL=blocksy-theme.js.map