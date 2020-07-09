/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table id="rawr" style="width:90%; position: center; border:none; margin-left:auto;margin-right:auto;"">'+
    '<thead>'+
        '<tr>'+
            '<th>Extension number</th>'+
            '<th>Name</th>'+
            '<th>Position</th>'+
            '<th>Office</th>'+
            '<th>Salary</th>'+
        '</tr>'+
        '<tr>'+
            '<td>'+d.extn+'</td>'+
            '<td>'+d.name+'</td>'+
            '<td>'+d.position+'</td>'+
            '<td>'+d.office+'</td>'+
            '<td>'+d.salary+'</td>'+
        '</tr>'+
    '</thead>'+
    '</table>';
}
 
$(document).ready(function() {
    var table = $('#example').DataTable( {
        "ajax": "js/rawr.txt",
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" }
        ],
        "order": [[1, 'asc']]
    } );
     
    // Add event listener for opening and closing details
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );