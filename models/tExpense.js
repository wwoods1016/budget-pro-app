// ONLY ONE MODEL IS NEEDED per TABLE

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