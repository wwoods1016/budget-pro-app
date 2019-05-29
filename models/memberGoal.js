module.exports = (sequelize, DataTypes) => {
	const goals = sequelize.define('goals', {
		goalId: {
			type: DataTypes.UUID,
			allowNULL:false,
			primaryKey: true,
            unique: true,
            autoIncrement: true
		},	
		gDate: {
			type: DataTypes.STRING,
			allowNULL: false,
			validate: {
				'len': [1, 255]
			}
		},
		gName: {
			type: DataTypes.STRING,
			allowNULL: false,
			validate: {
				'len': [1, 255]
			}
		},
		gDesc: {
			type: DataTypes.TEXT,
			allowNULL: false,
			validate: {
				'len': [1, 255]
			}
		},
		gAmount: {
			type: DataTypes.FLOAT,
			allowNULL: false
        },
        gHHMemId: {
			type: DataTypes.UUID,
			allowNULL:false,
            autoIncrement: false
		}	
	},{freezeTableName: true})
	return goals;

};
