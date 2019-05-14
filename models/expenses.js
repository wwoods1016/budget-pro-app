module.exports = (sequelize, DataTypes) => {
	const Expenses = sequelize.define('Expenses', {});

	Expenses.associate = models => {
		// Associating Expenses with Income
		// When an Expense is deleted, also delete any associated Household Incomes
		Expenses.hasMany(models.Income, {});
	};

	return Expenses;
};
