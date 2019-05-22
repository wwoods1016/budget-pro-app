// We only need one model per table so this one model will represent the Household Members table

module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("hhMember", {
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
      // this is the related Income and Expense record ID so that we can matchup all entries with a specific household member
        relIeId: {
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
    return hhMember;
};
