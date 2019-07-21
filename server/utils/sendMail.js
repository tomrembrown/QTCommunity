const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: 'key-1234123412341234',
    domain: 'mg.ashroh.com'
  },
  proxy: false
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth))

nodemailerMailgun.sendMail({
  from: inputEmail,
  to: 'receiveEmails@ashroh.com',
  subject: inputSubject,
  message: iniputMessage
}, function(err, info) {
  if (err) {
    console.log('Error: ' + err)
  }
  else {
    console.log('Response: ' + info)
  }
})