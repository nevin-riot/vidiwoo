// TODO: Make different files for TS files and JS binaries
jQuery((function ($) {
    var vidiwoo = "vidiwoo";
    if (jQuery(vidiwoo)) {
        var Imagenes = /** @class */ (function () {
            function Imagenes(claseCaja, claseMiniaturas) {
                this.cajaImagenes = jQuery("div.".concat(claseCaja));
                this.galeriaMiniaturas = jQuery(".".concat(claseMiniaturas, " > ol"));
                this.miniaturaImagen = jQuery(".".concat(claseMiniaturas, " ol > li"));
            }
            return Imagenes;
        }());
        var Videos = /** @class */ (function () {
            function Videos(claseVideo) {
                this.videosProducto = jQuery(".".concat(claseVideo));
            }
            return Videos;
        }());
        var blocksyImagenes_1 = new Imagenes("flexy-items", "flexy-pills");
        var blocksyVideos_1 = new Videos(vidiwoo);
        var e = 250;
        window.setTimeout(function () {
            var video;
            blocksyVideos_1.videosProducto.each(function anadirVideo() {
                // TODO: Make thumbnail customized image for video
                // Anadir un Thumbnail
                blocksyVideos_1.miniaturaVideo = blocksyImagenes_1.miniaturaImagen.last().clone(true);
                blocksyVideos_1.miniaturaVideo.children("span").attr("aria-label", "Diapositiva ".concat(blocksyImagenes_1.miniaturaImagen.length + 1));
                blocksyVideos_1.miniaturaVideo.appendTo(blocksyImagenes_1.galeriaMiniaturas);
                // TODO: Make videos dimension responsive
                // Anadir video a la cola de imagenes
                blocksyVideos_1.cajaVideos = blocksyImagenes_1.cajaImagenes.children("div").last().clone(true);
                video = jQuery(this).detach();
                blocksyVideos_1.cajaVideos.html(video.html());
                blocksyVideos_1.cajaVideos.find("video").attr("width", "600px").attr("height", "600px").css("margin-top", "-100px").css("background-color", "white");
                blocksyVideos_1.cajaVideos.appendTo(blocksyImagenes_1.cajaImagenes);
            });
        }, e);
    }
}));
//# sourceMappingURL=blocksy-theme.js.map