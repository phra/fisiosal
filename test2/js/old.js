//alert("non hai il supporto per csstransform3d");
$('document').ready(function () {

    var resetMap = function () {
        $("#containermaps").hide();
    }
    
    var resetContainer = function () {
        $(".block .container").hide();
    }

    var showMap = function () {
        $("#containermaps").show();
    }

    var caricaHome = function () {
        $("#container").load("static/home.html").show();
    }
    
    $("#menutop").hide();
    caricaHome();

    $("#stanzasale").click(function () {
        resetContainer();
        $("#container").load("static/caratteristichestanza.html").show();
        $("#container1").load("static/proprieta.html").show();
        $("#container2").load("static/regolamento.html").show();
    });
    
    
    $("#ginnastica").click(function () {
        resetContainer();
        $("#container").load("static/caratteristicheginnastica.html").show();
        $("#container1").load("static/finalitaginnastica.html").show();
    });
    
    $("#home").click(function () {
        resetContainer();
        caricaHome();
    });

    $("#chisiamo").click(function () {
        resetContainer();
        $("#container").load("static/chisiamo.html").show();
    });
    
    $("#contatti").click(function () {
        resetContainer();
        $("#container").load("static/contatti.html").show();
    });
    
    $("#gallery").click(function () {
        resetContainer();
        $("#container").load("static/gallery.html", function () {
            var options = { $AutoPlay: true };
            var jssor_slider1 = new $JssorSlider$('slider1_container', options);
        }).show();
    });
    
});