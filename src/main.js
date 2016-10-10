//requirejs.config({
//    paths: {
//        "jquery": "vendors/jquery/dist/jquery",
//        "bootstrap": "vendors/bootstrap/dist/js/bootstrap",
//        "masonry":"bower_files/masonry/dist/masonry.pkgd"
//    },
//    shim: {
//        jquery: {
//            exports: "jQuery"
//        },
//        bootstrap: {
//
//                deps: ["jquery"],
//                exports: "jQuery"
//
//        },
//        masonry:{
//            deps: ["jquery"],
//            exports: "jQuery"
//        }
//    }
//});

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




    //$(".panel").click(function (){
    //    if($(".accordion").hasClass("collapsed")){
    //        $(".down-arrow").remove();
    //        $(".up-arrow").add();
    //    }else
    //    {
    //        $(".up-arrow").remove();
    //        $(".down-arrow").add();
    //
    //    }
    //});

    $.getJSON("/data/data-info.json", function(data){

            $('#data-table').DataTable( {
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
    //$('#data-table').DataTable( {
    //    "ajax": {
    //        "url": "/data/data-info.json",
    //        "dataSrc": ""
    //    },
    //    columns: [
    //        { data: "Name" },
    //        { data: "Description" },
    //        { data: "E-mail" },
    //        { data: "Country" },
    //        { data: "City" },
    //        { data: "Phone/ Fax" }
    //    ]
    //} );
    });
