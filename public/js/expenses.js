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
    .then(function (data) {
      console.log(data)
      var id = data.id
      console.log(id)


      var table = $('<table></table>').addClass('foo');

      var row = $('<tr></tr>');

      var th1 = $('<th></th>').addClass('bar').text("ExpensesSource");
      var th2 = $('<th></th>').addClass('bar').text("ExpensesCategory");
      var th3 = $('<th></th>').addClass('bar').text("ExpensesAmount");
      var th4 = $('<th></th>').addClass('bar').text("ExpensesDescription");
      console.log(th1)
      table.append(row);
      row.append(th1);
      row.append(th2);
      row.append(th3);
      row.append(th4);

      var row1 = $('<tr></tr>');
      var td1 = $('<td></td>').addClass('bar').text(newExpenses.Source);
      var td2 = $('<td></td>').addClass('bar').text(newExpenses.Category);
      var td3 = $('<td></td>').addClass('bar').text(newExpenses.Amount);
      var td4 = $('<td></td>').addClass('bar').text(newExpenses.Description);
      table.append(row1);
      row1.append(td1);
      row1.append(td2);
      row1.append(td3);
      row1.append(td4);
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("deleteBtn");
      row1.append(deleteBtn)
      console.log(table)

      $('#exp-section').append(table);

      $(".deleteBtn").on("click", function () {
        console.log("delete btn has been click")



        $.ajax({
          method: "DELETE",
          url: "/api/incm_exp/" + id
        })
          .then(function () {
            row1.remove();
          });
      })

    });



  $.get("/api/incm_exp", function (data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "exp-well-" + i);
      // Append the well to the well section
      $("#allexp").append(wellSection);

      // Now  we add our book data to the well we just placed on the page
      $("#exp-well-" + i).append("<h6>ID:" + data[i].id + "</h6>");
      $("#exp-well-" + i).append("<h6>Amount: " + data[i].amount + "</h6>");
      $("#exp-well-" + i).append("<h6>Category: " + data[i].category + "</h6>");
      $("#exp-well-" + i).append("<h6>Description: " + data[i].descript + "</h6>");
      $("#exp-well-" + i).append("<h6>Source: " + data[i].source + "</h6>");
    }
  });
    Source: $("#expenses-source").val("");
    Category: $("#expenses-category").val("");
    Amount: $("#expenses-amount").val("");
    Date: $("#expenses-date").val("");
    Description: $("#expenses-description").val("");



});

