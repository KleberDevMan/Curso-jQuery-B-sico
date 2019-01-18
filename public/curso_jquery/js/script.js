$(function () {

    // EVENTO NAVEGADOR: error()

    // $('img').on("error", function () {
    //     $('img').attr("src", "img/error.png");
    // });

    // $('img').on("error", function () {
    //     var imagem = $(this).attr("src");
    //     alert('Imagem ' + imagem + ' Indisponível');
    //     $('img').attr("src", "img/error.png");
    // });


    // EVENTO NAVEGADOR: recize()
    // $('img')
    //     .width($(window).width())
    //     .height($(window).height());
    // $(window).resize(function () {
    //     $('img')
    //         .width($(window).width())
    //         .height($(window).height());
    // });


    // EVENTO NAVEGADOR: scroll()

    // $(window).scroll(function () {
    //     $('img').fadeOut('1000');
    // });

    $('body').css("height", "5000px");

    $(window).scroll(function () {
        var topo = $(window).scrollTop();

        if (topo > 400){
            $('img').fadeOut('1000');
        }else{
            $('img').fadeIn('1000');
        }
    });

});