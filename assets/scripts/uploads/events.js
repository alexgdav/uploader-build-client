// events.js for uploads
'use strict'

//const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  event.preventDefault()
  console.log('create ran!')

  const data = new FormData(this)
  // console.log(data)
  // for (const pair of data.entries()) {
  //  console.log(pair[0], pair[1])
  console.log(...data)

  api.createUpload(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const addHandlers = () => {
  $('#upload-form').on('submit', onCreateUpload)
}

module.exports = {
  addHandlers
}
