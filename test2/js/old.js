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
        $("#container").load("static/caratteristichestanza.html", function () {
            $("#container").show();
        });
        $("#container1").load("static/proprieta.html", function () {
            $("#container1").show();
        });
        $("#container2").load("static/regolamento.html", function () {
            $("#container2").show();
        });
    });


    $("#ginnastica").click(function () {
        resetContainer();
        $("#container").load("static/caratteristicheginnastica.html",
            function () {
                $("#container").show();
            });
        $("#container1").load("static/finalitaginnastica.html", function () {
            $("#container1").show();
        });
    });

    $("#home").click(function () {
        resetContainer();
        caricaHome();
    });

    $("#chisiamo").click(function () {
        resetContainer();
        $("#container").load("static/chisiamo.html", function () {
            $("#container").show();
        });
    });

    $("#contatti").click(function () {
        resetContainer();
        $("#container").load("static/contatti.html", function () {
            $("#container").show();
        });
    });

    $("#gallery").click(function () {
        resetContainer();
        $("#container").load("static/gallery.html", function () {
            var options = {
                $AutoPlay: true
            };
            //var jssor_slider1 = new $JssorSlider$('slider1_container', options);
            $("#container").show();
            $('#slides').slidesjs({
                width: 940,
                height: 528,
                play: {
                    active: true,
                    auto: true,
                    interval: 4000,
                    swap: true
                }
            });
            
        });
    });
});