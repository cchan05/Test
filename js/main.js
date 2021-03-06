//toggle icon change
    $('#btn_rank').click(function(){
      $(this).find("i").toggleClass('fa-chevron-left fa-chevron-right');
    });

    //sidebar
    document.getElementById("btn_rank").addEventListener("click", open_close);
    var menuState = 1
    function open_close() {
    if(menuState === 0){
      menuState = 1;
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
    }
    else {
      menuState = 0;
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
    }
    console.log(menuState);
    }

//list grid view

$(document).ready(function(){

    $('#list-grid-button-clients').change(function(){
        if(this.checked)
        {           
            $('.clients_card').removeClass('col-xl-2 col-lg-2');
            $('.clients_card').addClass('col-xl-6 col-lg-6');
            $('.clients_card').addClass('scale-in-center');  

            $('.clients_card').removeClass('mb-grid');
            $('.clients_card').addClass('mb-list');

            $('.card').removeClass('grid-clients');
            $('.card').addClass('list-clients');

            $('.img-fluid').removeClass('img-grid');
            $('.img-fluid').addClass('img-list'); 
        }

        else {
            $('.clients_card').removeClass('col-xl-6 col-lg-6');
            $('.clients_card').addClass('col-xl-2 col-lg-2');  
            $('.clients_card').addClass('scale-in-center');  

            $('.clients_card').removeClass('mb-list');
            $('.clients_card').addClass('mb-grid');

            $('.card').removeClass('list-clients ');
            $('.card').addClass('grid-clients');

            $('.img-fluid').removeClass('img-list');
            $('.img-fluid').addClass('img-grid');
        }
    });

    $('#list-grid-button').change(function(){
        if(this.checked)
        {           
            $('.list-card').removeClass('col-xl-6 col-lg-6');
            $('.list-card').addClass('col-xl-3 col-lg-3');

            $('.pie').removeClass('pie_active');
            $('.pie').addClass('pie_notactive');

            $('.kpi').removeClass('kpi_desc_active');
            $('.kpi').addClass('kpi_desc_notactive');

            
            $('footer').removeClass('float-right');
            $('footer').addClass('text-center');
            
            $('.current').removeClass('border-top pt-3');
            $('.current').addClass('border-0');  
        }

        else {
            $('.list-card').removeClass('col-xl-3 col-lg-3');
            $('.list-card').addClass('col-xl-6 col-lg-6');
        
            $('.pie').addClass('pie_active');
            $('.pie').removeClass('pie_notactive');
        
            $('.kpi').removeClass('kpi_desc_notactive');
            $('.kpi').addClass('kpi_desc_active');
            
            $('footer').removeClass('text-center');
            $('footer').addClass('float-right');
        
            $('.current').removeClass('border-0');
            $('.current').addClass('border-top');
        }
   });
});


// active buttons
$('.listgrid').click(function(e) {
    e.preventDefault();
    $('.listgrid').removeClass('btnactive');
    $(this).addClass('btnactive');
});

$('.piebar').click(function(e) {
    e.preventDefault();
    $('.piebar').removeClass('btnactive');
    $(this).addClass('btnactive');
});

// arrow
$('.buttona').hover(function(){
    $(this).addClass('promo__buttona');
});

$('.buttons').hover(function(){
    $(this).addClass('promo__buttons');
});

//nav scroll & sticky
$(function () {
    $(document).scroll(function () {
      var $nav = $("#navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

window.onscroll = function() {myFunction()};
      
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

//accordion
$('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
});

// carousel
$(document).ready(function () {
    $('#demo').find('.carousel-item').first().addClass('active');
});

// row toggle
$(".exploder").click(function(){                    
    $(this).toggleClass("btn-success btn-danger");                    
    $(this).find("span").toggleClass('fa-angle-down fa-angle-up');                  
    $(this).closest("tr").next("tr").toggleClass("hide");
    
    if($(this).closest("tr").next("tr").hasClass("hide")){      
        $(this).closest("tr").removeClass("row_active");                         
        $(this).closest("tr").next("tr").children("td").slideUp();
    }
    else{
        $(this).closest("tr").addClass("row_active");
        $(this).closest("tr").next("tr").children("td").slideDown("350");
    }
});

//pie-graph toggle
$("#pie").click(function(e) {
    e.preventDefault();
    $("#bar_card").slideUp();
        $("#pie_card").slideDown();    
});

$("#bar").click(function(e) {
e.preventDefault();
$("#pie_card").slideUp();
    $("#bar_card").slideDown();    
}); 

//legend sort
$("#allbtn").on('click', function() {
    $(".passed, .critical, .fail").fadeIn( function(){
      $(this).addClass("slide-in-left");
    });
  });

$("#passedbtn").on('click', function() {
  $(".passed").fadeIn( function(){
    $(this).addClass("slide-in-left");
  });
  $(".critical, .fail").hide();
});

$("#criticalbtn").on('click', function() {
  $(".critical").fadeIn( function(){
    $(this).addClass("slide-in-left");
  });
  $(".passed, .fail").hide();
});

$("#failbtn").on('click', function() {
  $(".fail").fadeIn( function(){
    $(this).addClass("slide-in-left");
  });
  $(".passed,.critical").hide();
});   

//Projects

//list-grid-clients active button
$('.listgrid-clients').click(function(e) {
  e.preventDefault();
  $('.listgrid-clients').removeClass('btnactive');
  $(this).addClass('btnactive');
});

//navbar sticky & scrolled
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $("#navbarproj");
//     $nav.toggleClass('scrolled1', $(this).scrollTop() > $nav.height());
//   });
// });

// window.onscroll = function() {myFunction()};
    
// var navbar = document.getElementById("navbarproj");
// var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky1")
  } else {
    navbar.classList.remove("sticky1");
  }
}


