module.exports = app => {
    // const posts = require("../controllers/post.controllers.js");
    const posts = require("../controllers/post.controller");

    let router = require("express").Router();

    // Create New Post
    router.post("/", posts.create);

    router.get("/", posts.findAll);

     // Retrieve published posts
     router.get("/published", posts.findAllPublished);

    router.get("/:id", posts.findOne);

    router.put("/:id", posts.update);

    router.delete("/:id", posts.delete);

    router.delete("/", posts.deleteAll);

    

    app.use("/api/posts/", router);

}