$('a').click(function(){
    var page = $(this).attr('href');
    if(page != "#"){
        $("#content").load(page);
        return false;
    }
});

$(document).ready(function() {
    var NavY = $('.nav').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});

function loginFunction(){
    if(($("#logname").val() == "Andrzej") && ($("#logpass").val() == "pass")){
        sessionStorage.setItem("name", $("#logname").val());
        document.getElementById("username").innerHTML = sessionStorage.name;
    }else{
        sessionStorage.clear();
        alert("Logowanie nieudane!");
        document.getElementById("username").innerHTML ="Zaloguj";
    }
}
function registerFunction(){
    sessionStorage.setItem("name", $("#regname").val());
    document.getElementById("username").innerHTML = sessionStorage.name;
}

