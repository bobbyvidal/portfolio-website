var express = require('express');
const app = express()
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
var mailer = require('mailer')

app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('*', (req, res) => {
//   res.send('Server is working. Please post at "/contact" to submit a message.')
// })

app.post('/contact', (req, res) => {
  const { email = '', name = '', message = '' } = req.body
  console.log(req.body)

  mailer({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
