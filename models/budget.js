module.exports = (sequelize, DataTypes) => {
	const Budget = sequelize.define('Budget', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
			len: [1]
		}
	});

	Budget.associate = models => {
		// We're saying that a Budget should belong to a Household
		// A Budget can't be created without a Household due to the foreign key constraint
		Budget.belongsTo(models.Household, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Budget;
};
