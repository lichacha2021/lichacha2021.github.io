$(document).ready(function () {
    //adjust the bg picture
    var $windowHight = $(window).height();
    $(".home").attr("style", "height:" + $windowHight + "px;");

    // show and hide navi
    $("#navi").attr("style", "display:none;");
    $("#navi-burger").click(function () {
        $("#navi").toggle();
    });
});

//hide navi
$(document).click(function (e) {
    var navi = $("#navi"),
        burgers = $("#navi-burger")[0],
        burger1 = $("#navi-burger hr")[0],
        burger2 = $("#navi-burger hr")[1],
        burger3 = $("#navi-burger hr")[2],
        navil = $("#navi")[0],
        target = e.target;
    if (target !== burger1 && target !== burger2 && target !== burger3 && target !== burgers && navil !== target && !$.contains(navil, target)) {
        navi.hide();
    }
});