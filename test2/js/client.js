$('document').ready(function () {
    /*$.ajaxSetup({
        cache: false
    });*/
    var resetMap = function () {
        $("#containermaps").hide();
    }

    var showMap = function () {
        $("#containermaps").show();
    }

    var caricaHome = function () {
        $("#container").load("static/home.html");
    }

    //$("#containermaps").load("static/maps.html");
    caricaHome();


});