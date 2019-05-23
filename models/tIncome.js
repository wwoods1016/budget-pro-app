// We only need one model per table so this one model will represent the incm_exp table that has both types - Income and Expense

module.exports = function (sequelize, DataTypes) {
    var incm_exp = sequelize.define("incm_exp", {
        descript: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        IEtype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // this is the related household member id so that we can matchup all entries with a specific household member
        relHhMemID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    incm_exp.associate = models => {
		// We're saying that Income should belong to a Household expense
		// A Income can't be created without a Household expense due to the foreign key constraint
		incm_exp.belongsTo(models.hhMember, {
		});
	};
    return incm_exp;
};
