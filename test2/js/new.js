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
            $("#container").load("static/caratteristichestanza.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        chiudiMenu();
    });

    $("#proprietastanza").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/proprieta.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        chiudiMenu();
    });

    $("#regolamento").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/regolamento.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        chiudiMenu();
    });

    $("#caratteristicheginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/caratteristicheginnastica.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        chiudiMenu();
    });

    $("#finalitaginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/finalitaginnastica.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        chiudiMenu();
    });

    $("#home").click(function () {
        caricaHome();
        chiudiMenu();
    });

    $("#chisiamo").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/chisiamo.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        chiudiMenu();
    });

    $("#contatti").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/contatti.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        chiudiMenu();
    });

    $("#gallery").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/gallery.html", function () {
                $("#container").fadeIn("slow");
                Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.min.js');
                Galleria.configure({
                    imageCrop: false,
                    transition: 'fade'
                });
                Galleria.run('#galleria');
            });
        });
        chiudiMenu();
    });
});