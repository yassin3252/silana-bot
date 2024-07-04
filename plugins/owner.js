import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212717457920
*instagram:*\nhttps://www.instagram.com/gtx_33_ys?igsh=bG4xZDVmaGp5am03

*youtube:*\nyoutube.com/no

*facebook page:*\nno

*script bot :* yassin

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
