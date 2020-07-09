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
    const title = req.query.title;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Post.findAll({ where: condition})
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500)({
                message:
                    err.message || "Some Error occured while find post"
            })
        });

}

// Find Single
exports.findOne = (req, res) => {
    const id = req.params.id;

    Post.findByPk(id)
        .then((data) => {
                res.send(data);
        }).catch((err) => {
                res.send(500)
                message: "Error Retrieving post with id=" + id
        });
}

// Update a Post with ID
exports.update = (req, res) => {
    const id = req.params.id;

    Post.update(req.body, {
        where: {id: id}
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Post was update successfuly"
            });
        } else {
            res.send({
                message: `Cannot update Post wint id=${id}`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error update post with id=" + id
        })
    });
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