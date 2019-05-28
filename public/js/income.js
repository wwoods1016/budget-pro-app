// JS and JQuery for the income of an individual household will go within the function below.
// $(document).ready(() => {
//     $("income_submit_button").on("click", function (event) {
//         event.preventDefault();
//         var income;

//         var newIncome = {
//             source: $("#income-source").val().trim(),
//             category: $("#income-category").val().trim(),
//             amount: $("#income-amount").val().trim(),
//             date: $("#income-date").val().trim(),
//             description: $("income-description").val.trim()
//         };
//         console.log(newIncome);


//         // Adding event listeners for deleting, editing, and adding income
    

//     });
// });


// JS and JQuery for the expenses overview page will go within the function below.
$(document).ready(function () {
    console.log("ready!");
  });
  
  $("#income-form").on("submit", function (event) {
    console.log("button has been click")
    event.preventDefault();
    var income;
  
    var newIncome = {
      Source: $("#income-source").val().trim(),
      Category: $("#income-category").val().trim(),
      Amount: $("#income-amount").val().trim(),
      Date: $("#income-date").val().trim(),
      Description: $("#income-description").val().trim(),
    };
    // console.log(newIncome);
  
  
    
  
  
    $.post("/api/incm_exp", newIncome)
      // On success, run the following code
      .then(function (data) {
        // Log the data we found
        // console.log(data);
        var row = $("<div>");
        row.addClass("income");
  
        row.append("<p><strong> IncomeSource: </strong>" + newIncome.Source + "  </p>");
        row.append("<p><strong> IncomeCategory: </strong>" + newIncome.Category + "</p>");
        row.append("<p><strong> IncomeCategory: </strong>" + newIncome.Amount + "</p>");
        //row.append("<p><strong> IncomeDescription: </strong>" + newIncome.expDescription + "</p>");

        // $("#exp-section").append(row);  DO WE NEED AN INCOME SECTION???
      });
      $("#income-source").val("");
      $("#income-category").val("");
      $("#income-amount").val("");
     // $("#income-description").val("")
  
  
  
    $.get("/api/incm_exp", function (data) {
      console.log(data)
  
  
  
    });
  
  
  
  });
  
  
  
  
  