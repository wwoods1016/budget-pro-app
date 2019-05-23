// ONLY ONE MODEL IS NEEDED per TABLE

module.exports = (sequelize, DataTypes) => {
	const tExpenses = sequelize.define('tExpenses', {});

	tExpenses.associate = models => {
		// Associating Expenses with Income
		// When an Expense is deleted, also delete any associated Household Incomes
		tExpenses.hasMany(models.Income, {});
	};

	return tExpenses;
};

//  module.exports = function(sequelize, DataTypes) {
//     var Post = sequelize.define("incm_exp", {
//     descript: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       amount: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       IEtype: {
//         type: DataTypes.STRING,
//         defaultValue: "Income"
//       }
//     });
//     return incm_exp;
//   };