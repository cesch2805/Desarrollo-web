const qrcode = require('qrcode-terminal');
const readDB = require('../readDB')

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client();
// const client = new Client({ 
// 	puppeteer: { 
// 		executablePath: '/usr/bin/brave-browser-stable',
// 	 }, 
// 	authStrategy: new LocalAuth({
// 		  clientId: "client-one" 
// 		}), 
// 	puppeteer: {
// 			headless: false, }
//  });

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


/*client.on('message', message => {
	console.log(message.body);
});*/

readDB.catch(console.error).then(arr => {
	client.on('ready', () => {
    console.log('Client is ready!');
		arr.forEach(cumpleañero => {
			console.log(cumpleañero.name + " " + cumpleañero.phone);
			const number = "521" + cumpleañero.phone;
			//console.log(number)
			const chatId = number + "@c.us";
			client.sendMessage(chatId, 'Feliz cumpleaños ' + cumpleañero.name + '!');
		});
	});
});

module.exports = client;