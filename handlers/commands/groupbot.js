let cap = `Join Group Bot untuk info ter-update

• *Telegram Channel* : https://t.me/info_mg
• *WhatsApp Group 1* : https://chat.whatsapp.com/KSupzi0Ez28AxNkViVaJfy
• *WhatsApp Group 2* : https://chat.whatsapp.com/DJFe116CDyb26pb2pYDoy2
`
const buttonsDefault = [
    { urlButton: { displayText: ` Telegram Bot`, url: `https://t.me/tikdl_bot` } },
    { urlButton: { displayText: ` Instagram`, url: 'https://www.instagram.com/mg.bot' } },
]

module.exports = {
    tags: ['others', 'information'],
    cmd: ['groupbot'],
    help: ['groupbot'],
    exec: async (m, client) => {
        await client.sendMessage(m.chat, { text: cap, footer: global.footer, templateButtons: buttonsDefault }, { quoted: m })
    }
}