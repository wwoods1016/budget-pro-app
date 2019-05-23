module.exports = (sequelize, DataTypes) => {
	const hhMember = sequelize.define('hhMember', {
        hhMemID:{
            type: DataTypes.INTEGER,
			allowNULL: false

        },
        hhMemFirstName:{
            type: DataTypes.STRING,
            allowNULL:false,
            validate: {
                'len': [1,255]
            }
        },
        hhMemLastName:{
            type: DataTypes.STRING,
            allowNULL:false,
            validate: {
                'len': [1,255]
            }
        },
        relHHId:{
           type: DataTypes.INTEGER,
           allowNULL:false
        }
    })
    return hhMember;
}

