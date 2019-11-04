// api.js for uploads
'use strict'

const config = require('../config')
const store = require('../store')

const createUpload = function (data) {
  return $.ajax({
    url: config.apiUrl + '/uploads',
    method: 'POST',
    data,
    processData: false,
    contentType: false,
    headers: {
      'Authorization': `Bearer ${store.user.token}`
    }
    // data: data
  })
}

module.exports = {
  createUpload
}
