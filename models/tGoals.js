// We only need one model per table so this one model will represent the goals table 

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("goals", {
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
        type: DataTypes.DATE,
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

    return goals;
  };
  