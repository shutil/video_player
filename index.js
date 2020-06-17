$(document).ready(function () {
    console.log("hello world");

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            console.log("bottom");
        }
    });
});