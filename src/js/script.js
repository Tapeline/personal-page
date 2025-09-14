$(document).ready(() => {
    $('.t-collapsible-trigger').on('click', function() {
        $(this).next('.t-collapsible-content').toggleClass("t-collapsible-open");
    });
    // $(".zoom-on-click").on("click", () => {
    //     console.log($(this));
    //     $(this).next("img").toggleClass("zoomed-media")
    // });
    $(".zoom-on-click").each((i, elem) => {
        const $elem = $(elem);
        $elem.on("click", () => {
            $elem.toggleClass("zoomed-media");
        })
    })
})
