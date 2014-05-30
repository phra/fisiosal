//alert("non hai il supporto per csstransform3d");
$('document').ready(function () {

    var resetMap = function () {
        $("#containermaps").hide();
    }

    var showMap = function () {
        $("#containermaps").show();
    }

    var caricaHome = function () {
        $("#container").load("static/home.html");
    }

    $("#stanzasale").click(function () {
        $("#container").load("static/caratteristichestanza.html");
        $("#container1").load("static/proprieta.html");
        $("#container2").load("static/regolamento.html");
        $("#container").click();
    });
    
    
    $("#ginnastica").click(function () {
        $("#container").load("static/caratteristicheginnastica.html");
        $("#container1").load("static/finalitaginnastica.html");
        $("#container").click();
    });
    
    $("#home").click(function () {
        caricaHome();
    });

    $("#chisiamo").click(function () {
        $("#container").load("static/chisiamo.html");
    });
    
    $("#contatti").click(function () {
        $("#container").load("static/contatti.html");
    });
    
});