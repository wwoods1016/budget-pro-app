// We only need one model per table so this one model will represent the incm_exp table that has both types - Income and Expense

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("incm_exp", {
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
      }
    });
    return incm_exp;
  };
  