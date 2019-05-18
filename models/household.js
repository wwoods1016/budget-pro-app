module.exports = (sequelize, DataTypes) => {
	const household = sequelize.define('household', {

		hhID: {
			type: DataTypes.INTEGER,
			allowNULL: false

        },
        hhName: {
            type:DataTypes.VARCHAR,
            allowNull:false,
            validate: {
                'len': [1,255]
            }

        },
        relIeId:{
            type:DataTypes.Integer,
        }
    })
    return  household;
}