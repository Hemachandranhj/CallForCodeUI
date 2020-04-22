const accountSid = 'AC4f5a81aa7fea225ffcb3ea6ea78f8707';
const authToken = '838aacfe059ad7f81adf25960962b084';
const client = require('twilio')(accountSid, authToken);

const args = require('minimist')(process.argv.slice(2))

//console.log(args);

console.log(args._[0]);

client.messages
  .create({
    body: args._[0],
    from: '+18142819718',
    to: '+44 7438 507419',
    statusCallback: 'https://assistanceservice.eu-gb.cf.appdomain.cloud/assistance'
  })
  .then(message => console.log('message sent')).catch((err) => console.log(err));