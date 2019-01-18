$(function () {

    var exemple = $('.ex1');

    // CLICK -----------------------------------
    $('.ev1').click(function () {
        $(this).css({background: '#ccc'});
        exemple.text("Você clicou!");
    });

    // DOIS CLICKS -----------------------------------
    $('.ev2').dblclick(function () {
        $(this).css({background: '#ccc'});
        exemple.text("Você deu 2 cliques!");
    });

    // FOCUS -----------------------------------
    $('.ev3').focusin(function () {
        $(this).css({background: '#ccc'});
        exemple.text("Você deu foco!");
    }).focusout(function () {
        $(this).css({background: '#000'});
        exemple.text("Você tirou o foco!");
    });

    // HOVER -----------------------------------
    $('.ev4').hover(function () {
        $(this).css({background: '#ccc'});
        exemple.text("Você passou o mouse!");
    });

    // APERTO O CLICK -----------------------------------
    $('.ev5').mousedown(function () {
        $(this).css({background: '#ccc'});
        exemple.text("Você APERTOU o botão do mouse!");
        // SOLTO O CLICK
    }).mouseup(function () {
        $(this).css({background: '#000'});
        exemple.text("Você SOUTOU o botão do mouse!");
    });

    //TER CUIDADO COM OS FILHOS DO ELEMENTO -----------------------------------
    // mouse_enter()
    var a = 0;
    $('.ev6').mouseenter(function () {
       a += 1;
       exemple.text("Entradas do Mouse: " + a);
        // mouse_out()
    }).mouseout(function () {
        exemple.text("Saida do Mouse");
    });
    var b = 0;
    // mouse_over()
    $('.ev7').mouseover(function () {
        b += 1;
        exemple.text("Etradas do Mouse: " + b);
        // mouse_leave()
    }).mouseleave(function () {
        exemple.text("Mouse Leave");
    });

    // VE A MOVIMENTACAO DO MOUSE (pixels) -----------------------------------
    $('.ev8').mousemove(function (move) {
        var localx = move.pageX;
        var localy = move.pageY;

        exemple.text("Movimento X: " +localx+ " - Movimento Y: " +localy);
    });

});

