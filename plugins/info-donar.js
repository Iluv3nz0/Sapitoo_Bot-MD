/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ 
*┃* Aquí esta el IG del Bot 🐸
*┃ 
*┃ 
*┃* PROXIMAMENTE 
┃ 
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.instagram.com/idk_jhuz/', '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
