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

    var resetContainer = function () {
        $(".block .container").hide();
    }

    var caricaHome = function () {
        resetContainer();
        $("#container").load("static/home.html");
    }

    //resetContainer();

});