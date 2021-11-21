const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//Create a Post
router.post("/", async (req, res) => {
  const newPost = Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Update a post
router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      res.status(200).json("The post has been updated.");
    } else {
      res.status(403).json("You can only update your posts.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Delete a post

router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The post has been deleted.");
    } else {
      res.status(403).json("You can only delete your posts.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Like and Unlike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: { likes: req.body.userId },
      });
      res.status(200).json("You now like this post."); //Like post
    } else {
      await post.updateOne({
        $pull: { likes: req.body.userId },
      });
      res.status(200).json("You don't like this post."); //Unlike post
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get timeline post

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
