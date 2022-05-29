const YT = require('../../../lib/yt')

module.exports = {
    tags: ['downloader'],
    cmd: ['play2'],
    args: ['judul - artis'],
    help: ['play2'],
    exec: async (m, client, { prefix, args, cmd }) => {
        try {
            if (args.length < 1) return m.reply(`*Fitur mencari Vidio full tag metadata, sangat disarankan unutk memasukkan judul yang tepat*\n${prefix}${cmd} judul - artis\n\ncontoh : ${prefix}${cmd} Garox viral `)
            const arr = await YT.search(args.join(' '))
            let list = new Array();
            let desc = ` *Play Youtube* \n𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 𝙙𝙚𝙣𝙜𝙖𝙣 𝙛𝙪𝙡𝙡 𝙩𝙖𝙜 𝙢𝙚𝙩𝙖𝙙𝙖𝙩𝙖\n\n𝘿𝙞𝙩𝙚𝙢𝙪𝙠𝙖𝙣  *${arr.length}* *Vidio* `
            for (let i = 0; i < arr.length; i++) {
                list.push({
                    title: `${i + 1}. ${arr[i].title}`,
                    description: `Channel : ${arr[i].artist}\nAlbum : ${arr[i].album}\nDuration : ${arr[i].duration.label}\nSource : ${arr[i].isYtMusic ? 'YouTube Vidio' : 'YouTube'}\nId : ${arr[i].id}`,
                    rowId: `${prefix}ytmp4 ${arr[i].url}`
                });
            }
            await client.sendListM(
                m.chat,
                { buttonText: 'Video Downloader', description: desc, title: 'Pilih untuk mendownload' },
                list,
                m
            )

        } catch (error) {
            m.reply(util.format(error))
            console.log(error);
        }
    }
}
