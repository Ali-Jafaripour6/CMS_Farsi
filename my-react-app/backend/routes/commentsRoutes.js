const express = require("express");
const SabzLearnShopDB = require("./../db/SabzLearnShop");

const commentsRouter = express.Router();

// routes

commentsRouter.get("/", (req, res) => {
  let selectAllCommentsQuery = `SELECT Comments.id, Comments.isAccept , Comments.body, Comments.date, Comments.hour, Users.firsname as userID, Products.title as productID FROM Comments INNER JOIN Users ON Users.id = Comments.userID INNER JOIN Products ON Products.id = Comments.productID`;

  SabzLearnShopDB.query(selectAllCommentsQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.delete("/:commentID", (req, res) => {
  let commentID = req.params.commentID;

  let deleteCommentQuery = `DELETE FROM Comments WHERE id = ${commentID}`;
  SabzLearnShopDB.query(deleteCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.put("/:commentID", (req, res) => {
  let commentID = req.params.commentID;
  let editCommentQuery = `UPDATE Comments SET body="${req.body.body}" WHERE id = ${commentID}`;

  SabzLearnShopDB.query(editCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.post("/accept/:commentID", (req, res) => {
  let commentID = req.params.commentID;

  let acceptCommentQuery = `UPDATE Comments SET isAccept=true WHERE id = ${commentID}`;

  SabzLearnShopDB.query(acceptCommentQuery, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error in accepting comment" });
    } else {
      res.send({ success: true, message: "Comment accepted" });
    }
  });
});

commentsRouter.post("/reject/:commentID", (req, res) => {
  let commentID = req.params.commentID;

  let rejectCommentQuery = `UPDATE Comments SET isAccept=false WHERE id = ${commentID}`;

  SabzLearnShopDB.query(rejectCommentQuery, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error in rejecting comment" });
    } else {
      res.send({ success: true, message: "Comment rejected" });
    }
  });
});

module.exports = commentsRouter;
