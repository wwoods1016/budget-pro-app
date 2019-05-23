// We only need one model per table so this one model will represent the Household Members table

module.exports = function (sequelize, DataTypes) {
    var hhMember = sequelize.define("hhMember", {
        hhMemFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        hhMemLastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
      // this is the related Household record ID so that we can matchup any member with a specific household
        relHHId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // this is the household member id that is used to matchup all other table entries with a specific household member
        hhMemID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    hhMember.associate = models => {
		// We're saying that Income should belong to a Household expense
		// A Income can't be created without a Household expense due to the foreign key constraint
		hhMember.belongsTo(models.household, {
		});
	};
    return hhMember;
};
