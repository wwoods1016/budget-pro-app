


module.exports = (sequelize, DataTypes) => {
	const incm_exp = sequelize.define('incm_exp', {
		amount: {
			type: DataTypes.FLOAT,
			allowNULL: false
		},
		IEdate: {
			type: DataTypes.STRING,
			allowNULL: false,
			validate: {
				'len': [1, 255]
			}
		},
		category: {
			type: DataTypes.STRING,
			allowNULL: false,
			validate: {
				'len': [1, 255]
			}
		},
		descript: {
			type: DataTypes.TEXT,
			allowNULL: false,
			validate: {
				'len': [1, 255]
			}

		},
		source: {
			type: DataTypes.STRING,
			allowNULL: false
		}
	}, { freezeTableName: true })
	return incm_exp;

};