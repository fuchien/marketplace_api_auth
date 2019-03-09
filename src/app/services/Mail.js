const nodemailer = require('nodemailer')
const path = require('path')
const nbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)

transport.use('compile', nbs({
  viewEngine: exphbs.create({partialsDir: []}),
  viewPath: path.resolve(__dirname, '..', 'views', 'emails'),
  extName: '.hbs'
}))

module.exports = transport