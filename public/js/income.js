$(document).ready(function() {});

$('#income-form').on('submit', function(event) {
	console.log('button has been click');
	event.preventDefault();
	var income;

	var newIncome = {
		Source: $('#income-source')
			.val()
			.trim(),
		Category: $('#income-category')
			.val()
			.trim(),
		Amount: $('#income-amount')
			.val()
			.trim(),
		Date: $('#income-date')
			.val()
			.trim(),
		Description: $('#income-description')
			.val()
			.trim(),
		IEType: $('#IEType')
			.val()
			.trim()
	};

	// console.log(newIncome);

	$.post('/api/incm_exp', newIncome).then(function(data) {
		console.log(data);
		var id = data.id;
		console.log(id);

		var table = $('<table></table>').addClass('foo');

		var row = $('<tr></tr>');

		var th1 = $('<th></th>')
			.addClass('bar')
			.text('incomeSource');
		var th2 = $('<th></th>')
			.addClass('bar')
			.text('incomeCategory');
		var th3 = $('<th></th>')
			.addClass('bar')
			.text('incomeAmount');
		var th4 = $('<th></th>')
			.addClass('bar')
			.text('incomeDescription');
		var th5 = $('<th></th>')
			.addClass('bar')
			.text('IETYPE');
		console.log(th1);
		table.append(row);
		row.append(th1);
		row.append(th2);
		row.append(th3);
		row.append(th4);
		row.append(th5);

		var row1 = $('<tr></tr>');
		var td1 = $('<td></td>')
			.addClass('bar')
			.text(newIncome.Source);
		var td2 = $('<td></td>')
			.addClass('bar')
			.text(newIncome.Category);
		var td3 = $('<td></td>')
			.addClass('bar')
			.text(newIncome.Amount);
		var td4 = $('<td></td>')
			.addClass('bar')
			.text(newIncome.Description);
		var td5 = $('<td></td>')
			.addClass('bar')
			.text(newIncome.IEType);

		table.append(row1);
		row1.append(td1);
		row1.append(td2);
		row1.append(td3);
		row1.append(td4);
		row1.append(td5);
		var deleteBtn = $('<button>');
		deleteBtn.text('x');
		deleteBtn.addClass('deleteBtn');
		row1.append(deleteBtn);
		console.log(table);

		$('#incm-section').append(table);

		$('.deleteBtn').on('click', function() {
			console.log('delete btn has been click');

			$.ajax({
				method: 'DELETE',
				url: '/api/incm_exp/' + id
			}).then(function() {
				row1.remove();
			});
		});
	});

	$.get('/api/incm_exp', function(data) {
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			// Create a parent div to hold data
			var wellSection = $('<div>');
			// Add a class to this div: 'well'
			wellSection.addClass('well');
			// Add an id to the well to mark which well it is
			wellSection.attr('id', 'incm-well' + i);
			// Append the well to the well section
			$('#allincm').append(wellSection);

			// Now  we add our book data to the well we just placed on the page
			$('#incm-well' + i).append('<h6>ID:' + data[i].id + '</h6>');
			$('#incm-well' + i).append(
				'<h6>Amount: ' + data[i].amount + '</h6>'
			);
			$('#incm-well' + i).append(
				'<h6>Category: ' + data[i].category + '</h6>'
			);
			$('#incm-well' + i).append(
				'<h6>Description: ' + data[i].descript + '</h6>'
			);
			$('#incm-well' + i).append(
				'<h6>Source: ' + data[i].source + '</h6>'
			);
			$('#incm-well' + i).append(
				'<h6>Source: ' + data[i].IEType + '</h6>'
			);
		}
	});
	Source: $('#income-source').val('');
	Category: $('#income-category').val('');
	Amount: $('#income-amount').val('');
	Date: $('#income-date').val('');
	Description: $('#income-description').val('');
});
