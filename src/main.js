

$(document).ready(function() {
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });


    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    $(".nano-content").niceScroll({cursorcolor:"#95e1d3"});
    $("body").niceScroll({cursorcolor:"#95e1d3", cursorwidth:"12px",cursoropacitymin:"0.6"});










    $.getJSON("/data/data-info.json", function(data){

            $('#data-table ').DataTable( {
                data: data,
                columns: [
                    { data: "Name" },
                    { data: "Description" },
                    { data: "E-mail" },
                    { data: "Country" },
                    { data: "City" },
                    { data: "Phone/ Fax" }
                ]
            } );

        });

    });
if ($(".panel-title a").hasClass("collapsed")){
    $(".down-arrow").css("display","block");
    $(".up-arrow").css("display","none");
}else {
    $(".up-arrow").css("display","block");
    $(".down-arrow").css("display","none");

}
$(".panel").click(function (){
    if ($(".panel-title a").hasClass("collapsed")){
        $(".down-arrow").css("display","block");
        $(".up-arrow").css("display","none");
    }else {
        $(".up-arrow").css("display","block");
        $(".down-arrow").css("display","none");

    }
});

$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});