$(function () {
    $("a[href*='#']:not([href='#'])").click(function (e) {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
    //scroll nav color chage
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            console.log("to jest", $("#main-nav"))
            $("#main-nav").addClass("scroll");
        } else {
            $("#main-nav").removeClass("scroll");
        }
    });
});
