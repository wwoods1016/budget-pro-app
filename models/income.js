module.exports = (sequelize, DataTypes) => {
	const Income = sequelize.define('Income', {});

	Income.associate = models => {
		// We're saying that Income should belong to a Household expense
		// A Income can't be created without a Household expense due to the foreign key constraint
		Income.belongsTo(models.Expenses, {});
	};

	return Income;
};
