$('document').ready(function () {
    
    var pushmenu = new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('trigger'));

    var resetMap = function () {
        $("#containermaps").hide();
    }

    var showMap = function () {
        $("#containermaps").show();
    }

    var caricaHome = function () {
        resetMap();
        $("#container").load("static/home.html");
    }
    
    var chiudiMenu = function () {
        pushmenu._resetMenu();
    }

    $("#caratteristichestanza").click(function () {
        $("#container").load("static/caratteristichestanza.html");
        chiudiMenu();
    });
    
    $("#proprietastanza").click(function () {
        $("#container").load("static/proprieta.html");
        chiudiMenu();
    });
    
    $("#regolamento").click(function () {
        $("#container").load("static/regolamento.html");
        chiudiMenu();
    });
    
    $("#caratteristicheginnastica").click(function () {
        $("#container").load("static/caratteristicheginnastica.html");
        chiudiMenu();
    });
    
    $("#finalitaginnastica").click(function () {
        $("#container").load("static/finalitaginnastica.html");
        chiudiMenu();
    });
    
    $("#home").click(function () {
        caricaHome();
        chiudiMenu();
    });

    $("#chisiamo").click(function () {
        $("#container").load("static/chisiamo.html");
        chiudiMenu();
    });
    
    $("#contatti").click(function () {
        $("#container").load("static/contatti.html");
        chiudiMenu();
    });

});