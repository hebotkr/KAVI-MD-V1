const { cmd, commands } = require("../command");
const config = require('../config');
cmd(
  {
    pattern: "menu",
    alise: ["list"],
    react: "🙈",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `😺 *HelloW  ${pushname}*

> 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘬𝘢𝘷𝘪-𝘮𝘥 🎗️

❮❮ *MAIN COMMANDS* ❯❯

   ${menu.main}
   .owner
❮❮ *DOWNLOAD COMMANDS* ❯❯

    ${menu.download}    
❮❮ *GROUP COMMANDS* ❯❯

    ${menu.group}
❮❮ *OWNER COMMANDS* ❯❯

    .restart
    .update
❮❮ *CONVERT COMMANDS* ❯❯

    ${menu.convert}
❮❮ *SEARCH COMMANDS* ❯❯

    ${menu.search}


𝐌𝐚𝐝𝐞 𝐛𝐲 *𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀*  🎗️

> KAVI-MD MENU MSG 🍀
`;
      await robin.sendPresenceUpdate('recording', from);
      await robin.sendMessage(from, { audio: { url: "https://github.com/hebotkr/HELP/raw/refs/heads/main/ASLAVA%20FUNK!%20(1).mp3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://github.com/hebotkr/HELP/blob/main/photo/IMG-20250205-WA0002.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
