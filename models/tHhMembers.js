// We only need one model per table so this one model will represent the Household Members table

module.exports = function(sequelize, DataTypes) {
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
      relHHId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      relIeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return hhMember;
  };
  