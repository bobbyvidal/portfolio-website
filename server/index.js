var express = require('express');
const app = express()
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('*', (req, res) => {
//   res.send('Server is working. Please post at "/contact" to submit a message.')
// })

app.post('/contact', (req, res) => {
  console.log(req.body)

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bobbyvidalportfoliowebsite@gmail.com',
      pass: process.env.PASSWORD
    },
  });
  
  var mailOptions = {
    from: 'bobbyvidalportfoliowebsite@gmail.com',
    to: 'bobbyvidal@gmail.com',
    subject: `Sent by ${req.body.name} - ${req.body.email}`,
    text: `${req.body}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
