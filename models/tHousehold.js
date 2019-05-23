// We only need one model per table so this one model will represent the Household table

module.exports = function (sequelize, DataTypes) {
    var household = sequelize.define("household", {
        hhName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    // this is the Household record ID that is used to  matchup all related household members
        hhID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return household;
};
