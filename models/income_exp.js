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

		IEtype: {
			type: DataTypes.ENUM,
			values: ["Income", "Expense"],

		},
		category: {
			type: DataTypes.ENUM,
			values: ["Bills", "Utilities", "Savings", "CC Payment","Other", "Wellness", "Food", "Personal Care","Travel"],
        },
			descript: {
				type: DataTypes.VARCHAR,
                allowNULL: false,
                validate: {
                    'len': [1,255]
                }

			},
			source: {
				type: DataTypes.VARCHAR,
				allowNULL: false

			},

		}

	
	});
return incm_exp;
	
};
