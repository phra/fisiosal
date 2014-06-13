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
            $("#container").show();
            Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.min.js');
            Galleria.configure({
                imageCrop: false,
                transition: 'fade'
            });
            Galleria.run('#galleria');
        });
    });
});