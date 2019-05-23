// JS and JQuery for the expenses overview page will go within the function below.
$(document).ready(function () {
  console.log("ready!");
});

$("#expenses-form").on("submit", function (event) {
  console.log("button has been click")
  event.preventDefault();
  var expenses;

  var newExpenses = {
    Source: $("#expenses-source").val().trim(),
    Category: $("#expenses-category").val().trim(),
    Amount: $("#expenses-amount").val().trim(),
    Date: $("#expenses-date").val().trim(),
    Description: $("#expenses-description").val().trim(),
  };
  // console.log(newExpenses);


  


  $.post("/api/incm_exp", newExpenses)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      // console.log(data);
      var row = $("<div>");
      row.addClass("expenses");

      row.append("<p><strong> ExpensesSource: </strong>" + newExpenses.Source + "  </p>");
      row.append("<p><strong> ExpensesCategory: </strong>" + newExpenses.Category + "</p>");
      row.append("<p><strong> ExpensesCategory: </strong>" + newExpenses.Amount + "</p>");
      //row.append("<p><strong> ExpensesDescription: </strong>" + newExpenses.expDescription + "</p>");
      // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
      $("#exp-section").append(row);
    });
    $("#expenses-source").val("");
    $("#expenses-category").val("");
    $("#expenses-amount").val("");
   // $("#expenses-description").val("")



  $.get("/api/incm_exp", function (data) {
    console.log(data)



  });



});




