module.exports = (sequelize, DataTypes) => {
	const goals = sequelize.define('goals', {
        goalId: {
			type: DataTypes.INTEGER,
			allowNULL: false

        },
        gName:{
            type:DataTypes.VARCHAR,
            allowNULL:false,
            validate: {
                'len': [1,100]
            }
        },
        gDesc:{
            type:DataTypes.TEXT,
            allowNULL:false,
            validate: {
                'len': [1,255]
            }

        },
        gAmount:{
            type:DataTypes.FLOAT,
            
        },
        gDATE:{
            type:DataTypes.DATE,

        }
    });
    return goals;
}
