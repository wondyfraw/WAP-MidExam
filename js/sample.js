
/**
 * Sample Exam solution
 */

$(document).ready(function () {

    "use strict";
    $("#studentForm").submit(function (event) {
        event.preventDefault();
        let studentName = $("#inputFullName").val();
        let studentID = $("#inputStudentID").val();
        let studentTable = $("#studentTable");

        let newRow = "<tr>";
        newRow +="<td>"+studentID + " - "+ studentName + "</td>" +"</tr>";

        studentTable.append(newRow);


        studentTable.delegate("tr", "click",function () {
            let rows = jQuery(this).closest('tr');
            let columns = rows.find('td');
            let values = "";
            $.each(columns, function (i,item) {
                values = values + 'td' + (i + 1) + ':' + item.innerHTML + '\n';
            })
              alert(values);
        })
    });
})