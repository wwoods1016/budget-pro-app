module.exports = (sequelize, DataTypes) => {
	const incm_exp = sequelize.define('incm_exp', {

		ieID: {
			type: DataTypes.INTEGER,
			allowNULL: false

		},
        amount:{
          type:DataTypes.FLOAT,
           allowNULL:false 
        },

		IEdate: {
			type: DataTypes.DATE
		},

		category: {
			type: DataTypes.ENUM,
			values: [""],

		},
		IEType: {
			type: DataTypes.ENUM,
			values: ["Bills", "Utilities", "Savings", "CC Payment","Other", "Wellness", "Food", "Personal Care","Travel"],

			descript: {
				type: DataTypes.VATCHAR,
				allowNULL: false

			},
			source: {
				type: DataTypes.VATCHAR,
				allowNULL: false

			},

		}

	
	});
return incm_exp;
	
};
