const express = require('express');

const router = express.Router();
const userModel = require('../models/users')
const validation = require('../validations/users')
const jwt = require('jsonwebtoken');
const { authencation } = require('../middleware/auth');



router.post('', async (req, res) => {
  const valid = await validation.createUserValidate(req.body)
  console.log(valid)
  if (valid) {
    return res.status(400).send('error')
  }


  let name = req.body.name
  let email = req.body.email
  let password = req.body.password
  let is_disabled = false

  if (email !== null && email !== undefined) {

    const exsistingEmailCheck = await userModel.checkExistsEmailAddress(email)
    console.log(exsistingEmailCheck)

    if (exsistingEmailCheck !== '') {
      return res.send(exsistingEmailCheck)

    }
  }

  if (password !== null && password !== undefined) {

    const checkExistsPassword = await userModel.checkExistsPassword(password)
    console.log(checkExistsPassword)

    if (checkExistsPassword !== '') {
      return res.send(checkExistsPassword)

    }
  }


  const createUser = await userModel.createUser(name, password, email, is_disabled)
  console.log(createUser)
  if (createUser === null) {
    return res.status(400).send('db error')
  }
  else {
    let token = jwt.sign({ id: createUser }, 'jwtPrivateKey');
    return res.status(200).json({ 'message': 'success', 'response_objects': { 'token': token, 'userId': createUser } })
  }

})

router.get('/:user_id', authencation, async (req, res) => {
  let id = req.params['user_id'];



  const getUser = await userModel.usersGetById(id)
  return res.status(200).json({ getUser })




})



module.exports = router