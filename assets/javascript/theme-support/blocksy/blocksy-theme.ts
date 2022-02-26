// TODO: Make different files for TS files and JS binaries

jQuery((function ($) {
    let vidiwoo = "vidiwoo"
    if (jQuery(`.${vidiwoo}`)) {
        class Imagenes {
            cajaImagenes: JQuery;
            galeriaMiniaturas: JQuery;
            miniaturaImagen: JQuery;

            constructor(claseCaja: string, claseMiniaturas: string) {
                this.cajaImagenes = jQuery(`div.${claseCaja}`);
                this.galeriaMiniaturas = jQuery(`.${claseMiniaturas} > ol`);
                this.miniaturaImagen = jQuery(`.${claseMiniaturas} ol > li`);
            }
        }

        class Videos {
            cajaVideos: JQuery;
            videosProducto: JQuery;
            miniaturaVideo: JQuery;

            constructor(claseVideo: string) {
                this.videosProducto = jQuery(`.${claseVideo}`);
            }
        }


        const blocksyImagenes = new Imagenes("flexy-items", "flexy-pills");
        const blocksyVideos = new Videos(vidiwoo);


        type retrasoEjecucion = number;
        let e: retrasoEjecucion = 250;



        window.setTimeout(function () {
            let video;
            blocksyVideos.videosProducto.each(
                function anadirVideo() {


                    // TODO: Make thumbnail customized image for video

                    // Anadir un Thumbnail
                    blocksyVideos.miniaturaVideo = blocksyImagenes.miniaturaImagen.last().clone(true);
                    blocksyVideos.miniaturaVideo.children("span").attr("aria-label", `Diapositiva ${blocksyImagenes.miniaturaImagen.length + 1}`);
                    blocksyVideos.miniaturaVideo.appendTo(blocksyImagenes.galeriaMiniaturas);
                    // TODO: Make videos dimension responsive
                    // TODO: Add negative margin/less padding to all video containing Product 
                    
                    // Anadir video a la cola de imagenes
                    video = jQuery(this).html();
                    blocksyVideos.cajaVideos = blocksyImagenes.cajaImagenes.children("div").last().clone(true);
                    blocksyVideos.cajaVideos.html(video);
                    blocksyVideos.cajaVideos.find("video").attr("width", "600px").attr("height", "600px").css("margin-top", "-100px").css("background-color", "white");
                    blocksyVideos.cajaVideos.appendTo(blocksyImagenes.cajaImagenes)
                    jQuery(this).remove()

                    // Remove lightbox effect on images
                    jQuery(".pswp").remove()

                })
        }, e)
    }

}))