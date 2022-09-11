
const questionModel = require('../models/questions')
const express = require('express');

const router = express.Router();

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
  const getQuestion = await questionModel.questionsGetById(id)
  return res.status(200).send(getQuestion)
})

router.put('/:question_id', authencation, async (req, res) => {
  let id = req.params['question_id'];
  const getDeleteQuestion = await questionModel.deleteQuestion(id)
  return res.status(200).send(getDeleteQuestion)
})


module.exports = router