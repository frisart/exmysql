const { sequelize } = require(".");
const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) =>{
    const Post = sequelize.define("post", {
        title: {
            types: Sequelize.STRING;
        },
        description: {
            types: Sequelize.STRING;
        },
        published: {
            types: Sequelize.BOOLEAN
        }
    });

    return Post;
};