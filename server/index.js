var express = require('express');
const app = express()
var cors = require('cors')
const sgMail = require('@sendgrid/mail');
app.use(cors())
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/contact', (req, res) => {
  console.log(req.body)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'bobbyvidal@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})


