/** WAP Lab5 JS assignment */

jQuery(document).ready(function () {
"use strict";

//jQuery("#censusSubmitButton").on("click" , function (event) {
   //     event.preventDefault();
//});

    //https://www.npmjs.com/package/dateformat
    let today = new Date();
    today = dateFormat(today, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    jQuery("#today").text(today);
    document.getElementById("censesForm").addEventListener("submit", formAction);


     function formAction() {
         //jQuery("#censusSubmitButton").click(function onClickMe() {

             let censusTable = document.getElementById("censusTable");
             censusTable.className ="table table-striped";
             censusTable.insertRow(-1);
             let tableRow = "<tr>";
             tableRow +="<td>"+ $("#citizenInput").val()+"</td>";
             tableRow += "<td>" + $("#socialSecurityNumberInput").val()+ "</td>";
             tableRow += "<td>" + $("#fullNameInput").val()+ "</td>";
             tableRow += "<td>" + $("#stateInput").val()+ "</td>";
             let seniorRadios = document.getElementsByName("seniorCitizen");
             let seniorVal;
             if(seniorRadios[0].checked)
                 seniorVal = seniorRadios[0].value;
             else
                 seniorVal = seniorRadios[1].value;
             tableRow += "<td>" + seniorVal + "</td>";
             tableRow +="</tr>";
             censusTable.innerHTML += tableRow;
         //});
     }


});

