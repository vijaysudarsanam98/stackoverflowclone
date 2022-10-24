
const commentsModel = require('../models/comments')
const express = require('express');

const router = express.Router();
const { authencation } = require('../middleware/auth');


router.post('', async (req, res) => {
  let comments=req.body.comments
  let answerId = req.body.answerId
  let userId = req.body.userId
 
const createComments = await commentsModel.createComments(comments,answerId,userId)
  console.log(createComments)
  if (createComments === null) {
    return res.status(400).send('db error')
  }
  else {

    return res.status(200).send(createComments)
  }

})
router.get('/:comment_id', authencation, async (req, res) => {
  let id = req.params['comment_id'];

  
  const getcomments = await commentsModel.commentsGetById(id)
  return res.status(200).send(getcomments)
})


// delete answer
router.put('/:question_id', authencation, async (req, res) => {
  let id = req.params['question_id'];

 
  const getComments = await commentsModel.deleteComments(id)
  return res.status(200).send(getComments)
})




module.exports = router