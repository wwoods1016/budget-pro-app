module.exports = (sequelize, DataTypes) => {
	const Household = sequelize.define('Household', {
		// Giving the Household model a name of type STRING
		name: DataTypes.STRING
	});

	Household.associate = models => {
		// Associating Household with Posts
		// When an Household is deleted, also delete any associated Posts
		Household.hasMany(models.Post, {
			onDelete: 'cascade'
		});
	};

	return Household;
};
