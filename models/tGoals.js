// We only need one model per table so this one model will represent the goals table 

module.exports = function (sequelize, DataTypes) {
    var goals = sequelize.define("goals", {
        gName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        gAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        gDesc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gDate: {
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

    goals.associate = models => {
        // We're saying that goals should belong to a Household member
        // A goal can't be created without a Household member due to the foreign key constraint
        goals.belongsTo(models.hhMember, {
        });
    };

    return goals;
};
