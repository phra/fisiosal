$('document').ready(function () {

    var resetContainer = function () {
        $(".block .container").hide();
    }

    var caricaHome = function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/home.html").fadeIn("slow");
        });
    }

    var chiudiMenu = function () {
        pushmenu._resetMenu();
    }

    resetContainer();
    var pushmenu = new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('trigger'));
    caricaHome();


    $("#caratteristichestanza").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/caratteristichestanza.html").fadeIn("slow");
        });
        chiudiMenu();
    });

    $("#proprietastanza").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/proprieta.html").fadeIn("slow");
        });
        chiudiMenu();
    });

    $("#regolamento").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/regolamento.html").fadeIn("slow");
        });
        chiudiMenu();
    });

    $("#caratteristicheginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/caratteristicheginnastica.html").fadeIn("slow");
        });
        chiudiMenu();
    });

    $("#finalitaginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/finalitaginnastica.html").fadeIn("slow");
        });
        chiudiMenu();
    });

    $("#home").click(function () {
        caricaHome();
        chiudiMenu();
    });

    $("#chisiamo").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/chisiamo.html").fadeIn("slow");
        });
        chiudiMenu();
    });

    $("#contatti").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/contatti.html").fadeIn("slow");
        });
        chiudiMenu();
    });

    $("#gallery").click(function () {

        $("#container").fadeOut("fast", function () {
            $("#container").load("static/gallery.html", function () {
                var options = {
                    $AutoPlay: true
                };
                var jssor_slider1 = new $JssorSlider$('slider1_container', options);
            })
        }).fadeIn("slow");
        chiudiMenu();
    });
});