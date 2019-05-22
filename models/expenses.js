module.exports = (sequelize, DataTypes) => {
	const Expenses = sequelize.define('Expenses', {});

	Expenses.associate = models => {
		// Associating Expenses with Income
		// When an Expense is deleted, also delete any associated Household Incomes
		Expenses.hasMany(models.Income, {});
	};

	return Expenses;
};




// $(document).ready(function () {
// 	console.log("ready!");
//    });
   
//    $("#expenses-form").on("submit", function (event) {
// 	console.log("button has been click")
// 	event.preventDefault();
// 	var expenses;
   
// 	var newExpenses = {
// 	  expSource: $("#expenses-source").val().trim(),
// 	  expCategory: $("#expenses-category").val().trim(),
// 	  expAmount: $("#expenses-amount").val().trim(),
// 	  expDate: $("#expenses-date").val().trim(),
// 	  //expDescription: $("#expenses-description").val.trim(),
// 	};
// 	console.log(newExpenses);
   
   
   
   
   
// 	$.post("/api/incm_exp", newExpenses)
// 	  // On success, run the following code
// 	  .then(function (data) {
// 		// Log the data we found
// 		console.log(data);
// 		var row = $("<div>");
// 		row.addClass("expenses");
   
// 		row.append("<p><strong> ExpensesSource: </strong>" + newExpenses.expSource + "  </p>");
// 		row.append("<p><strong> ExpensesCategory: </strong>" + newExpenses.expCategory + "</p>");
// 		row.append("<p><strong> ExpensesCategory: </strong>" + newExpenses.expAmount + "</p>");
// 		//row.append("<p><strong> ExpensesDescription: </strong>" + newExpenses.expDescription + "</p>");
// 		// row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
// 		$("#exp-section").append(row);
// 	  });
// 	  $("#expenses-source").val("");
// 	  $("#expenses-category").val("");
// 	  $("#expenses-amount").val("");
// 	 // $("#expenses-description").val("")
   
   
   
// 	$.get("/api/incm_exp", function (data) {
// 	  console.log(data)
   
   
   
// 	});
   
   
   
//    });