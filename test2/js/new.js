$('document').ready(function () {

    var resetContainer = function () {
        $(".block .container").hide();
    }

    var caricaSlideshow = function () {
        Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.min.js');
        Galleria.configure({
            imageCrop: false,
            transition: 'fade'
        });
        Galleria.run('#galleria');
    }


    var caricaHome = function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/home.html", function () {
                $("#container").fadeIn("slow", function () {
                   //caricaSlideshow(); 
                });
                
            });
        });
    }

    var hideMenu = function () {
        pushmenu._hideMenu();
    }

    var closeMenu = function () {
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
        hideMenu();
    });

    $("#proprietastanza").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/proprieta.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });

    $("#regolamento").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/regolamento.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });

    //NEW
    $("#gallerystanza").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/gallerystanza.html", function () {
                $("#container").fadeIn("slow");
                caricaSlideshow();
            });
        });
        hideMenu();
    });

    $("#galleryginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/galleryginnastica.html", function () {
                $("#container").fadeIn("slow");
                caricaSlideshow();
            });
        });
        hideMenu();
    });

    $("#galleryfisio").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/galleryfisio.html", function () {
                $("#container").fadeIn("slow");
                caricaSlideshow();
            });
        });
        hideMenu();
    });

    $("#caratteristicheginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/caratteristicheginnastica.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });
    
    $("#prezzistanza").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/prezzistanza.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });
    
    $("#prestazionifisio").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/prestazionifisio.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });
    
    $("#prezzifisio").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/prezzifisio.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });
    
    $("#prezziginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/prezziginnastica.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });

    $("#finalitaginnastica").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/finalitaginnastica.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        hideMenu();
    });

    $("#home").click(function () {
        caricaHome();
        closeMenu();
    });

    $("#chisiamo").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/chisiamo.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        closeMenu();
    });

    $("#contatti").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/contatti.html", function () {
                $("#container").fadeIn("slow");
            });
        });
        closeMenu();
    });

    $("#gallery").click(function () {
        $("#container").fadeOut("fast", function () {
            $("#container").load("static/gallery.html", function () {
                $("#container").fadeIn("slow");
                caricaSlideshow();
            });
        });
        closeMenu();
    });
});