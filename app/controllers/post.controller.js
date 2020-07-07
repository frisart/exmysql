const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
            res.status(400).send({
                message: "Content can not be empty"
            });
            return;
        }

    // Create Post
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    } 

    Post.create(post)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while createing the Post"
            });
        });
}

// Retrieve all
exports.findAll = (req, res) => {

}

// Find Single
exports.findOne = (req, res) => {

}

// Update a Post with ID
exports.update = (req, res) => {

}

// Delete a post
exports.delete = (req, res) => {

}


// Delete All Post
exports.deleteAll = (req, res) => {

}


// Find All Published
exports.findOnePublishe = (req, res) => {

}