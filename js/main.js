 $(document).ready(function () {
    function preloaded() {
            $("#preloader").remove("#preloader");
            $("body").removeAttr("style");
    }
    $(".carousel-item1>img").on("load", preloaded);

     setTimeout(function() {
                if(document.querySelector(".carousel-item > img").complete && $("#preloader").length) {
                preloaded()
                    ;}
                }
            
     , 200) 
    
    if ($(window).width() >= 992) {
        $('[data-toggle="tooltip"]').tooltip();
        $('#linka').tooltip('show');
    };	
   $('.modal').on('show.bs.modal', function (e) {
        $('#linka').tooltip('hide');
    })

   $('[data-filter]').on('click', function(){
        $('[data-filter]').removeClass('active');
        $(this).addClass('active');
        let a = $(this).attr('data-filter');
        $('.movie-card').hide();
        $('.' + a).show();
   })
});