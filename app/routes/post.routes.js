module.exports = app => {
    // const posts = require("../controllers/post.controllers.js");
    const posts = require("../controllers/post.controller");

    let router = require("express").Router();

    // Create New Post
    router.post("/", posts.create);

    router.get("/", posts.findAll);

    router.get("/:id", posts.findOne);

    router.put("/:id", posts.update);

    app.use("/api/posts/", router);

}