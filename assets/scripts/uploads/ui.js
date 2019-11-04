// ui.js for uploads
'use strict'

const store = require('../store')

const createSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createSuccess ran. Data is :', data)
}

const createFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
}

module.exports = {
  createSuccess,
  createFailure
}
