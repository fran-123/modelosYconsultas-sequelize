module.exports = (Sequelize,DataTypes) => {

    const alias = "Actor"

    const cols = {
        id : {
            type : DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        first_name :{
            type : DataTypes.STRING(100),
            allowNull : true,
        },
        last_name :{
            type : DataTypes.STRING(100),
            allowNull : true,
        },
        rating : {
            type : DataTypes.DECIMAL(3.1),
            defaultValue : null
        },
        favorite_movie_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    },

    const config = {
        tableName : 'actors', 
        timetamps : true, 
        underscored : true
    }


    const Actor = Sequelize.define(alias,cols,config)

    return Actor
}