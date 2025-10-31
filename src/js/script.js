$(document).ready(() => {
    $('.t-collapsible-trigger').on('click', function() {
        $(this).next('.t-collapsible-content').toggleClass("t-collapsible-open");
    });
    // $(".zoom-on-click").on("click", () => {
    //     console.log($(this));
    //     $(this).next("img").toggleClass("zoomed-media")
    // });
    //$(".zoom-on-click img").each((i, elem) => {
    //    const $elem = $(elem);
    //    $elem.on("click", () => {
    //        $elem.parent().addClass("zoomed-media")
    //    })
    //})
    let isZoomed = false;
    $(".zoom-on-click").each((i, elem) => {
        const $elem = $(elem);
        $elem.on("click", e => {
            if (!isZoomed) {
                $elem.addClass("zoomed-media");
                isZoomed = true;
            } else if (e.target.tagName !== "IMG") {
                $elem.removeClass("zoomed-media")
                isZoomed = false;
            }
        })
    })
})
