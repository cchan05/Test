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


// Pie
function piegraph() {

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
}

//bar
function bargraph() {
let ChanChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Aux 0 Default', 'Aux 1 Break', 'Aux 2','Aux 3','Aux 4 Coaching','Aux 5','Aux 6','Aux 7','Aux 8 Outbound','Aux 9'],
		datasets: [
			{
				// label: 'Percentage',
				data: [3.71, 34.58, 0.16, 0.00, 3.84, 0.00, 0.02, 0.00, 53.39, 4.30],
				backgroundColor: ['#18b2dd', '#1395ba', '#117899', '#0f5b78', '#0d3c55', '#c02e1d', '#d94e1f', '#f16c20', '#ef8b2c', '#ecaa38'],
				borderWidth: 1
				
			}
		]
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
}


//line
function linegraph() {
	let ChanChart = new Chart(ctx, {
		type: 'line',
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
	}