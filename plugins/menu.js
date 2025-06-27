const { cmd } = require('../lib/command');
const config = require('../settings');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "menu",
    react: "📂",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix }) => {
    try {

        let teksnya = `
 Hello  Ｉ ａｍ   𝗖𝗛𝗔𝗠𝗔 𝗠𝗗 𝗩2 ❯❯  
╭────────────────────●●►
| *🛠️  𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* ${require("../package.json").version}
| *📡  𝙈𝙀𝙈𝙊𝙍𝙔:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
| *⏱️  𝗥𝗨𝗡𝗧𝗜𝗠𝗘:* ${runtime(process.uptime())}
╰─────────────────────●●►
 *║  🎥❮❮  𝗖𝗛𝗔𝗠𝗔 𝗠𝗗 𝗩2 𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧❯❯  🎥 ║*`;

        let imageUrl = "https://files.catbox.moe/ww4val.jpg";

        let vpsOptions = [
            { title: "ᴏᴡɴᴇʀ menu 🇱🇰", description: "Bot Owner Only Commands", id: `${prefix}ownermenu` },
            { title: "ᴅᴏᴡɴʟᴏᴀᴅ menu 🇱🇰", description: "Get Bot Download Menu", id: `${prefix}dlmenu` },
            { title: "LOGO MENU 🇱🇰", description: "Get Bot logo Menu", id: `${prefix}logomenu` },
            { title: "ᴄᴏɴᴠᴇʀᴛ menu 🇱🇰", description: "Get Bot Convert Menu", id: `${prefix}convertmenu` },
            { title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ 🇱🇰", description: "Get Group Only Commands", id: `${prefix}groupmenu` },
            { title: "ᴀɪ ᴍᴇɴᴜ 🇱🇰", description: "Get Bot AI Commands List", id: `${prefix}aimenu` },
            { title: "𝙰𝙽𝙸𝙼𝙴 menu 🇱🇰", description: "Get Bot Search Menu", id: `${prefix}animemenu` },
            { title: "ꜰᴜɴ menu 🇱🇰", description: "Fun Joke Menu Bot", id: `${prefix}funmenu` },
            { title: "𝙼𝙰𝙸𝙽 menu 🇱🇰", description: "Owner Only Bug Menu", id: `${prefix}mainmenu` },
            { title: "𝙾𝚃𝙷𝙴𝚁 ᴍᴇɴᴜ️ 🇱🇰", description: "Random Commands Menu", id: `${prefix}othermenu` }
        ];

        let buttonSections = [
            {
                title: "List of SHADOW MOVIE X Bot Commands",
                highlight_label: "SHADOW MOVIE X",
                rows: vpsOptions
            }
        ];

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Select Menu" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Choose Menu Tab 📖",
                        sections: buttonSections
                    })
                }
            }
        ];

        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: teksnya,
            image: { url: imageUrl },
            contextInfo: {
                mentionedJid: [m.sender], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
                    newsletterName: `SHADOW 💗`,
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
