
/**
 * My Exam js file
 */

jQuery(document).ready(function () {

    "use strict";
    let today = new Date();
    today = dateFormat(today, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    //console.log(today);
    $("#header-date").text(today);

    const  account = {
        accountNumber :  null,
        balance :  0.0,
        accountType : null,
        toString : function () {
            return ` {AccountNumber: ${this.accountNumber},balance: ${this.balance}, AccountType: ${this.accountType} }`
        }
    }

    const  savingsAccount = Object.create(account);
    savingsAccount.accountNumber = '10001';
    savingsAccount.balance = 125000.00;
    savingsAccount.accountType = 'Savings';
    console.log(savingsAccount.toString());

    const checkingAccount = Object.create(account);
    checkingAccount.accountNumber = '10002';
    checkingAccount.balance = 75090.50;
    checkingAccount.accountType = 'Checking';
    console.log(checkingAccount.toString());

    savingsAccount.addInterest = function (interestRate) {
        let newBalance = (savingsAccount.balance * interestRate)/100 + savingsAccount.balance;
        savingsAccount.balance = newBalance;
    }

    checkingAccount.deductMaintenanceFee = function (maintenanceFeeRate) {
        let newCheckBalance  =checkingAccount.balance - (checkingAccount.balance * maintenanceFeeRate)/100;
        checkingAccount.balance = newCheckBalance;
    }

    savingsAccount.addInterest(1.5);
    checkingAccount.deductMaintenanceFee(10);

    console.log("After Interest and Deduction");
    console.log(savingsAccount.toString());
    console.log(checkingAccount.toString());
/////////////////////////////////////////////////////////////
    jQuery("#patientForm").submit(function (event) {
        event.preventDefault();

        let censusTable = document.getElementById("patientTable");
        let tableRow = "<tr>";
        tableRow +="<td>"+ $("#inputPatientID").val()+"</td>";
        tableRow += "<td>" + $("#inputFirstName").val()+ "</td>";
        tableRow += "<td>" + $("#inputMiddle").val()+ "</td>";
        tableRow += "<td>" + $("#inputLastName").val()+ "</td>";
        tableRow += "<td>" + $("#inputDOB").val()+ "</td>";
        tableRow += "<td>" + $("#inputDepartment").val()+ "</td>";
        let seniorRadios = document.getElementsByName("outPatent");
        let seniorVal;
        if(seniorRadios[0].checked)
            seniorVal = seniorRadios[0].value;
        else
            seniorVal = seniorRadios[1].value;
        tableRow += "<td>" + seniorVal + "</td>";
        tableRow +="</tr>";
        $("#patientTable").append(tableRow);
        //censusTable.innerHTML += tableRow;
    });

    jQuery("#showOutPatient").click(function () {
        if($(this).prop("checked") == true){

        }
    })

})