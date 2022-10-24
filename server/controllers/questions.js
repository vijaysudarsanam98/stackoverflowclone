
const questionModel = require('../models/questions')
const express = require('express');

const router = express.Router();
const { authencation } = require('../middleware/auth');


router.post('', async (req, res) => {

  let question = req.body.name
  let userId = req.body.email
  if (question !== null && question !== undefined) {
    const exsistingQuestion = await questionModel.checkExistsQuestion(question)
    console.log(exsistingQuestion)

    if (exsistingQuestion !== '') {
      return res.send(exsistingQuestion)

    }
  }
const createQuestion = await questionModel.createQuestion(question, userId)
  console.log(createQuestion)
  if (createUser === null) {
    return res.status(400).send('db error')
  }
  else {

    return res.status(200).send(createQuestion)
  }

})

router.get('/:question_id', authencation, async (req, res) => {
  let id = req.params['question_id'];

  let questionIdCheck=await questionModel.checkExistsQuestion(id)
  if (!questionIdCheck){
    return res.status(400).send('no question id')
  }
  const getQuestion = await questionModel.questionsGetById(id)
  return res.status(200).send(getQuestion)
})


// delete question
router.put('/:question_id', authencation, async (req, res) => {
  let id = req.params['question_id'];

  let questionIdCheck=await questionModel.checkExistsQuestion(id)
  if (!questionIdCheck){
    return res.status(400).send('no question id')
  }
  const getDeleteQuestion = await questionModel.deleteQuestion(id)
  return res.status(200).send(getDeleteQuestion)
})

// update question

router.put('/:question_id', authencation, async (req, res) => {
  let id = req.params['question_id'];

  let questionIdCheck=await questionModel.checkExistsQuestion(id)
  if (!questionIdCheck){
    return res.status(400).send('no question id')
  }

  let question = req.body.name
  if (question !== null && question !== undefined) {
    const exsistingQuestion = await questionModel.checkExistsQuestion(question)
    console.log(exsistingQuestion)

    if (exsistingQuestion !== '') {
      return res.send(exsistingQuestion)

    }
  }
  const udpateQuestion = await questionModel.updateQuestion(id,question)
  return res.status(200).send(udpateQuestion)
})


module.exports = router