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

    var caricaSlideshow = function () {
        Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.min.js');
        Galleria.configure({
            imageCrop: false,
            transition: 'fade'
        });
        Galleria.run('#galleria');
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
        $("#container3").load("static/gallerystanza.html", function () {
            $("#container3").show(function () {
                caricaSlideshow();
            });
        });
        $("#container4").load("static/prezzistanza.html", function () {
            $("#container4").show();

        });
    });


    $("#ginnastica").click(function () {
        resetContainer();
        $("#container").load("static/caratteristicheginnastica.html", function () {
            $("#container").show();
        });
        $("#container1").load("static/finalitaginnastica.html", function () {
            $("#container1").show();
        });
        $("#container2").load("static/galleryginnastica.html", function () {
            $("#container2").show(function () {
                caricaSlideshow();
            });
        });
        $("#container3").load("static/prezziginnastica.html", function () {
            $("#container3").show();
        });
    });

    $("#home").click(function () {
        resetContainer();
        caricaHome();
    });
    
    $("#fisio").click(function () {
        resetContainer();
        $("#container").load("static/prestazionifisio.html", function () {
            $("#container").show();
        });
        $("#container1").load("static/galleryfisio.html", function () {
            $("#container1").show(function () {
                caricaSlideshow();
            });
        });
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
            $("#container").show(function () {
                caricaSlideshow();
            });
        });
    });
});