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


// Pie
const zero = document.querySelector('#zero-input');
const one = document.querySelector('#one-input');
const two = document.querySelector('#two-input');
const three = document.querySelector('#three-input');
const four = document.querySelector('#four-input');
const five = document.querySelector('#five-input');
const six = document.querySelector('#six-input');
const seven = document.querySelector('#seven-input');
const eight = document.querySelector('#eight-input');
const nine = document.querySelector('#nine-input');
const ctx = document.getElementById('ChanChart').getContext('2d');

let ChanChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['Aux 0 Default', 'Aux 1 Break', 'Aux 2','Aux 3','Aux 4 Coaching','Aux 5','Aux 6','Aux 7','Aux 8 Outbound','Aux 9'],
		datasets: [
			{
				label: 'Percentage',
				data: [3.71, 34.58, 0.16, 0.00, 3.84, 0.00, 0.02, 0.00, 53.39, 4.30],
				backgroundColor: ['#18b2dd', '#1395ba', '#117899', '#0f5b78', '#0d3c55', '#c02e1d', '#d94e1f', '#f16c20', '#ef8b2c', '#ecaa38'],
				borderWidth: 1
				
			}
		]
	},
	options: {
		legend: {
		//    display: false,
    position: "left",
		// labels: {
		// 	boxWidth: 15,
		// 	fontSize: 20,
		// 	padding: 20
    // }
    labels: {
      boxWidth: 15,
      fontSize: 20,
      padding: 20,
      fontStyle: 'bold',
      generateLabels: function(chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
              return data.labels.map(function(label, i) {
                  var meta = chart.getDatasetMeta(0);
                  var ds = data.datasets[0];
                  var arc = meta.data[i];
                  var custom = arc && arc.custom || {};
                  var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                  var arcOpts = chart.options.elements.arc;
                  var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                  var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                  var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

    // We get the value of the current label
    var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

                  return {
                      // Instead of `text: label,`
                      // We add the value to the string
                      text: label + ": " + value + "%",
                      fillStyle: fill, 
                      strokeStyle: stroke,
                      lineWidth: bw,
                      hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                      index: i
                  };
              });
          } else {
              return [];
          }
      }
  }
		}
   }
});

const updateChartValue = (input, dataOrder) => {
  if(input){ //added
    input.addEventListener('change', e => {
      myChart.data.datasets[0].data[dataOrder] = e.target.value;
      myChart.update();
    });
  }
};

updateChartValue(zero, 0);
updateChartValue(one, 1);
updateChartValue(two, 2);
updateChartValue(three, 3);
updateChartValue(four, 4);
updateChartValue(five, 5);
updateChartValue(six, 6);
updateChartValue(seven, 7);
updateChartValue(eight, 8);
updateChartValue(nine, 9);