// // Pie
// const zero = document.querySelector('#zero-input');
// const one = document.querySelector('#one-input');
// const two = document.querySelector('#two-input');
// const three = document.querySelector('#three-input');
// const four = document.querySelector('#four-input');
// const five = document.querySelector('#five-input');
// const six = document.querySelector('#six-input');
// const seven = document.querySelector('#seven-input');
// const eight = document.querySelector('#eight-input');
// const nine = document.querySelector('#nine-input');
// const ctx = document.getElementById('myChart').getContext('2d');

// let myChart = new Chart(ctx, {
// 	type: 'pie',
// 	data: {
// 		labels: ['Aux 0 Default', 'Aux 1 Break', 'Aux 2','Aux 3','Aux 4 Coaching','Aux 5','Aux 6','Aux 7','Aux 8 Outbound','Aux 9'],
// 		datasets: [
// 			{
// 				label: 'Percentage',
// 				data: [3.71, 34.58, 0.16, 0.00, 3.84, 0.00, 0.02, 0.00, 53.39, 4.30],
// 				backgroundColor: ['#18b2dd', '#1395ba', '#117899', '#0f5b78', '#0d3c55', '#c02e1d', '#d94e1f', '#f16c20', '#ef8b2c', '#ecaa38'],
// 				borderWidth: 1
				
// 			}
// 		]
// 	},
// 	options: {
// 		legend: {
// 		//    display: false,
// 		position: "left",
// 		labels: {
// 			boxWidth: 15,
// 			fontSize: 20,
// 			padding: 20
// 		}
// 		}
//    }
// });

// const updateChartValue = (input, dataOrder) => {
// 	input.addEventListener('change', e => {
// 		myChart.data.datasets[0].data[dataOrder] = e.target.value;
// 		myChart.update();
// 	});
// };

// updateChartValue(zero, 0);
// updateChartValue(one, 1);
// updateChartValue(two, 2);
// updateChartValue(three, 3);
// updateChartValue(four, 4);
// updateChartValue(five, 5);
// updateChartValue(six, 6);
// updateChartValue(seven, 7);
// updateChartValue(eight, 8);
// updateChartValue(nine, 9);