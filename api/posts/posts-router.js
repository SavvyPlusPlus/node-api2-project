// implement your posts router here
const Posts = require('./posts-model.js');
const express = require("express")
const router = express.Router()

//POSTS ENDPOINTS

//GET 
router.get('/', (req, res) => {
    Posts.find(req)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "The posts information could not be retrieved"
            })
        })
})

//GET by ID
router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
        .then(posts => {
            if (posts) {
                res.status(200).json(posts);
            } else {
                res.status(404).json({
                    message: "The post with the specified ID does not exist"
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "The post information could not be retrieved"
            })
        })
})

//POST 
router.post('/', (req, res) => {
    Posts.insert(req.body)
    if (!posts.title || !posts.contents) {
        res.status(404).json({
            message: "Please provide title and contents for the post"
        })
    } else {
        Dog.create(newDog)
            .then(posts => {
                res.status(201).json(posts)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    message: "There was an error while saving the post to the database"
                })
            })
    }
})

//PUT ID
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const post = req.boby
    try {
        if (!post.title || !post.contents) {
            res.status(400).json({
                message: "Please provide title and contents for the post"
            })
        } else {
            const updatePosts = await Posts.update(id, post)
            if (!updatePosts) {
                res.status(404).json({
                    message: "The post with the specified ID does not exist"
                })
            } else {
                res.status(200).json(updatePosts)
            }
        }
    } catch (err) {
        res.status(500).json({
            message: "The post information could not be modified"
        })
    }
})


//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedPost = await Post.remove(id)
        if (!deletedPost) {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        } else {
            res.status(200).json(deletedPost)
        }
    } catch (err) {
        res.status(500).json({
            message: "The post could not be removed"
        })
    }
})

//GET COMMENTS
// GET /api/posts/:id/comments == comments of post by id
router.get("/:id/comments", (req, res) => {
    const { id } = req.params;
    Posts.findCommentById(id)
        .then(post => !post
            ? res.status(404)
                .json("Post does not exist")
            : res.json(post))
        .catch(() => res.status(500)
            .json("Post does not exist"));
});

module.exports = router