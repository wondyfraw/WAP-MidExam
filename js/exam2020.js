
/**
 * My Exam js file
 */

jQuery(document).ready(function () {

    "use strict";
    let today = new Date();
    today = dateFormat(today, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    console.log(today);
    $("#header-date").text(today);

    jQuery("#censusForm").submit(function (event) {
        event.preventDefault();

        let censusTable = document.getElementById("censusTable");
        let tableRow = "<tr>";
        tableRow +="<td>"+ $("#inputCitizenID").val()+"</td>";
        tableRow += "<td>" + $("#inputSocialSecurityNumber").val()+ "</td>";
        tableRow += "<td>" + $("#inputFullName").val()+ "</td>";
        tableRow += "<td>" + $("#inputState").val()+ "</td>";
        let seniorRadios = document.getElementsByName("seniorCitizen");
        let seniorVal;
        if(seniorRadios[0].checked)
            seniorVal = seniorRadios[0].value;
        else
            seniorVal = seniorRadios[1].value;
        tableRow += "<td>" + seniorVal + "</td>";
        tableRow +="</tr>";
        $("#censusTable").append(tableRow);
        //censusTable.innerHTML += tableRow;
    });

})