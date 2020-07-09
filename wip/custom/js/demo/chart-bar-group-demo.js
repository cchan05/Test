$(document).ready(function() {
  new Chart(document.getElementById("myChart").getContext("2d"), {
    title:{
		 text: 'Daily Average'
    },
    type: "bar",
    data: {
      labels: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] ,
      datasets: [
        {
            backgroundColor: ["#23bfaa", "#23bfaa", "#23bfaa", "#23bfaa", "#23bfaa", "#23bfaa", "#23bfaa", "#23bfaa", "#23bfaa", "#23bfaa"],
            fillColor: "#000000",
            data: [10, 7, 15, 10, 4, 7, 11, 4, 15, 12] 
        },
        {
            backgroundColor: ["#9bbb58", "#9bbb58", "#9bbb58", "#9bbb58", "#9bbb58", "#9bbb58", "#9bbb58", "#9bbb58", "#9bbb58", "#9bbb58"],
            data: [15, 15, 9, 15, 2, 17, 15, 24, 17, 29]
        },
        {
            backgroundColor: ["#8064a1", "#8064a1", "#8064a1", "#8064a1", "#8064a1", "#8064a1", "#8064a1", "#8064a1", "#8064a1", "#8064a1"],
            data: [5, 9, 10, 13, 14, 34, 29, 14, 15, 10]
        },
        {
          backgroundColor: ["#4aacc5", "#4aacc5", "#4aacc5", "#4aacc5", "#4aacc5", "#4aacc5", "#4aacc5", "#4aacc5", "#4aacc5", "#4aacc5"],
          data: [16, 8, 13, 13, 24, 27, 19, 24, 25, 20]
      },
      {
        backgroundColor: ["#4f81bc", "#4f81bc", "#4f81bc", "#4f81bc", "#4f81bc", "#4f81bc", "#4f81bc", "#4f81bc", "#4f81bc", "#4f81bc"],
        data: [20, 12, 19, 15, 34, 7, 15, 4, 7, 9]
    },
      {
        backgroundColor: ["#f79647", "#f79647", "#f79647", "#f79647", "#f79647", "#f79647", "#f79647", "#f79647", "#f79647", "#f79647"],
        data: [25, 30, 19, 15, 4, 7, 15, 4, 7, 9]
    },
      {
        backgroundColor: ["#7f6084", "#7f6084", "#7f6084", "#7f6084", "#7f6084", "#7f6084", "#7f6084", "#7f6084", "#7f6084", "#7f6084"],
        data: [10, 27, 7, 15, 4, 7, 15, 4, 7, 9]
    },
      {
        backgroundColor: ["#77a033", "#77a033", "#77a033", "#77a033", "#77a033", "#77a033", "#77a033", "#77a033", "#77a033", "#77a033"],
        data: [17, 29, 8, 15, 4, 7, 15, 4, 7, 9]
    },
      {
        backgroundColor: ["#c0504e", "#c0504e", "#c0504e", "#c0504e", "#c0504e", "#c0504e", "#c0504e", "#c0504e", "#c0504e", "#c0504e"],
        data: [18, 9, 10, 15, 4, 7, 15, 4, 7, 9]
    },
      {
        backgroundColor: ["#33558b", "#33558b", "#33558b", "#33558b", "#33558b", "#33558b", "#33558b", "#33558b", "#33558b", "#33558b"],
        data: [8, 5, 14, 15, 4, 7, 15, 4, 7, 9]
    },
        
      
       
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes:[{
          stacked: true
        }],
        yAxes:[{
          stacked: true
        }],
      }
    }
  });
});