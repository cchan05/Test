<!DOCTYPE html>
<html>
<head>
        <link rel="stylesheet" href="vendors/fontawesome-5.13.0/css/all.css">
        <link rel="stylesheet" href="vendors/mdb-4.14.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="js/pie.css"> <!-- Custom -->
        <script type="text/javascript" src="vendors/canvasjs-2.3.2/canvasjs.min.js"></script>
        <script type="text/javascript" src="vendors/mdb-4.14.0/js/popper.min.js"></script>
        <script type="text/javascript" src="vendors/mdb-4.14.0/js/jquery.min.js"></script> 
        <script type="text/javascript" src="vendors/mdb-4.14.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="vendors/mdb-4.14.0/js/mdb.min.js"></script>
    </head>
<body>

<h1>Charts</h1>

<button onclick="piegraph()">Pie</button>
<button onclick="bargraph()">Bar</button>
<button onclick="linegraph()">Line</button>

<p id="demo"></p>

<div class="card-body">
    <div class="col-lg-12">
        <canvas id="ChanChart"></canvas>
    </div>
</div>
<script type="text/javascript" src="js/pie.js"></script>
<script type="text/javascript" src="custom/js/demo/chart-area-demo.js"></script>
    <script type="text/javascript" src="custom/js/demo/chart-bar-group-demo.js"></script>
    <script type="text/javascript" src="custom/js/demo/chart-pie-demo.js"></script>
    <script type="text/javascript" src="custom/js/demo/chart-bar-demo.js"></script>
</body>
</html>
