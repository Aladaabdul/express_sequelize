module.exports = (sequelize, DataTypes) => {
    //Create Our Models

    const bookModel = sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allownull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "books"
    })

    return bookModel
}