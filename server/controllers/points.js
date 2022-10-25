
const pointsModel = require('../models/points')
const express = require('express');

const router = express.Router();
const { authencation } = require('../middleware/auth');

// points creation
router.post('', async (req, res) => {
  let points=req.body.points
  let answerId = req.body.answerId
  let userId = req.body.userId
 
const createPoints=await pointsModel.createPoints(points,answerId,userId)
  console.log(createPoints)
  if (createAnswers === null) {
    return res.status(400).send('db error')
  }
  else {

    return res.status(200).send(createPoints)
  }

})




module.exports = router