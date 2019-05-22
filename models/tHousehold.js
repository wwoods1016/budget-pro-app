// We only need one model per table so this one model will represent the Household table

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("household", {
    hhName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return household;
  };
  