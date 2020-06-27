const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize')

class WatchLink extends Model { }

WatchLink.init({
    anime_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    episode_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    type: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    link: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    created_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: "watch_link"
})

module.exports = WatchLink