const { DataTypes } = require('sequelize')
const sequelize = require('./database')

const Article = sequelize.define('Article', {
    uid: {
        type: DataTypes.STRING(36),  // UUID fait 36 caractères
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    desc: {
        type: DataTypes.TEXT,  // TEXT pour des descriptions longues
        allowNull: false
    },
    ImgPath: {
        type: DataTypes.STRING(500),  // URL peut être longue
        allowNull: true,
        defaultValue: 'https://m.media-amazon.com/images/I/71-vL7rKtDL._AC_UF1000,1000_QL80_.jpg'
    }
}, {
    tableName: 'articles',  // Nom de la table en BDD
    timestamps: true  // Ajoute createdAt et updatedAt automatiquement
})

module.exports = Article