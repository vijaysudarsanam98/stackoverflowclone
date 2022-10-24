
const answersModel = require('../models/answers')
const express = require('express');

const router = express.Router();
const { authencation } = require('../middleware/auth');

// answers creation
router.post('', async (req, res) => {
  let answers=req.body.answers
  let questionId = req.body.questionId
  let userId = req.body.userId
 
const createAnswers = await answersModel.createAnswer(answers, userId, questionId)
  console.log(createAnswers)
  if (createAnswers === null) {
    return res.status(400).send('db error')
  }
  else {

    return res.status(200).send(createAnswers)
  }

})
// get answer
router.get('/:answer_id', authencation, async (req, res) => {
  let id = req.params['answer_id'];

  let answerIdCheck=await answersModel.checkExistsAnswers(id)
  if (!answerIdCheck){
    return res.status(400).send('no question id')
  }
  const getAnswer = await answersModel.answersGetById(id)
  return res.status(200).send(getAnswer)
})


// delete answer
router.put('/:question_id', authencation, async (req, res) => {
  let id = req.params['question_id'];

  let questionIdCheck=await questionModel.checkExistsQuestion(id)
  if (!questionIdCheck){
    return res.status(400).send('no question id')
  }
  const getDeleteAnswers = await answersModel.deleteAnswers(id)
  return res.status(200).send(getDeleteAnswers)
})




module.exports = router