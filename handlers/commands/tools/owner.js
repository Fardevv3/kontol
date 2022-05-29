
let fs = require('fs')
module.exports = {
    tags: ['others', 'information'],
    cmd: ['owner', 'creator'],
    help: ['owner'],
    exec: (m, client) => {
  const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2022,
                            status: 1,
                            surface : 1,
                            message: 'FARDEV78', //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./src/log.png'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }


const kon = {
  "displayName": "2 contacts",
  "contacts": [
    {
      "displayName": "Fardev78",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fardev78;;;\nFN:Fardev78\nitem1.TEL;waid=18312576749:+1 (831) 257-6749\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
    },
    {
      "displayName": "Fahri",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Fahri;45;;;\nFN:Fahri\nORG:Fahri\nTITLE:\nitem1.TEL;waid=6283811034750:+62 838-1103-4750\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
    }
  ]
}
client.sendMessage(m.chat, { 
	contacts: kon
}, { quoted: ftroli })
}
}
