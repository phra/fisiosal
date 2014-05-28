$('document').ready(function () {
    /*$.ajaxSetup({
        cache: false
    });*/
    $("#chisiamo").click(function () {
        $("#container").load("static/chisiamo.html");
        $("#container").click();
    });
});