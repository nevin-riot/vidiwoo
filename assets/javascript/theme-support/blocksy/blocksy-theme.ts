jQuery((function ($) {
    let vidiwoo = "vidiwoo"
    if(jQuery(vidiwoo)){
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
    
                    // Anadir un Thumbail
                    blocksyVideos.miniaturaVideo = blocksyImagenes.miniaturaImagen.last().clone(true);
                    blocksyVideos.miniaturaVideo.children("span").attr("aria-label", `Diapositiva ${blocksyImagenes.miniaturaImagen.length + 1}`);
                    blocksyVideos.miniaturaVideo.appendTo(blocksyImagenes.galeriaMiniaturas);
    
                    // Anadir video a la cola de imagenes
                    blocksyVideos.cajaVideos = blocksyImagenes.cajaImagenes.children("div").last().clone(true)
                    video = jQuery(this).detach()
                    blocksyVideos.cajaVideos.html(video.html())
                    blocksyVideos.cajaVideos.find("video").attr("width", "600px").attr("height", "600px").css("margin-top", "-100px").css("background-color", "white");
                    blocksyVideos.cajaVideos.appendTo(blocksyImagenes.cajaImagenes)
                    
                    // // Anadir video a la cola de imagenes
                    // blocksyVideos.cajaVideos = blocksyImagenes.cajaImagenes.children("div").last().clone(true);
                    // blocksyVideos.cajaVideos.html(jQuery(this).html());
                    // blocksyVideos.cajaVideos.children("video").attr("width", "600px").attr("height", "600px").css("margin-top", "-100px").css("background-color", "white");
                    // jQuery(this).hide();
                    // blocksyVideos.cajaVideos.appendTo(blocksyImagenes.cajaImagenes);
                })
        }, e)
    }

}))