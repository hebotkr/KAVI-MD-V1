const { cmd, commands } = require("../command");
const { deafault: getFbVideoinfo } = import("fb-downloader-scrapper");

cmd(
  {
    pattern: "fb",
    alias: ["facebook"],
    react: "🌍",
    desc: "Download Facebook Video",
    category: "download",
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
      if (!q) return reply("*url එකක් දෙන්නෝ* 😉");

      // Validate the Facebook URL format
      const fbRegex = /(https?:\/\/)?(www\.)?(facebook|fb)\.com\/.+/;
      if (!fbRegex.test(q))
        return reply("*Invalid Facebook URL! Please check and try again.* 🌚");

      // Fetch video details
      reply("*Downloading your video...* 🌛");

      const result = await getFbVideoInfo(q);

      if (!result || (!result.sd && !result.hd)) {
        return reply("*Failed to download video. Please try again later.* 🌚");
      }

      const { title, sd, hd } = result;

      // Prepare and send the message with video details
      let desc = `
*💛 𝐊𝐀𝐕𝐈-𝐌𝐃 𝐅𝐁 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 💛*


♨️ *Quality*: ${hd ? "HD Available" : "SD Only"}


𝐌𝐚𝐝𝐞 𝐛𝐲 *𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀*  🎗️
        `;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://github.com/hebotkr/HELP/blob/main/photo/IMG-20250205-WA0002.jpg",
          },
          caption: desc,
        },
        { quoted: mek }
      );
      // Send the video if available
      if (hd) {
        await robin.sendMessage(
          from,
          { video: { url: hd }, caption: "*-------KAVI-HD VIDEO--------*" },
          { quoted: mek }
        );
        await robin.sendMessage(
          from,
          { video: { url: sd }, caption: "*----------SD VIDEO----------*" },
          { quoted: mek }
        );
      } else if (sd) {
        await robin.sendMessage(
          from,
          { video: { url: sd }, caption: "*----------SD VIDEO----------*" },
          { quoted: mek }
        );
      } else {
        return reply("*No downloadable video found!* 🌚");
      }

      return reply("*Thanks for using kavi-md* 💛");
    } catch (e) {
      console.error(e);
      reply(`*Error:* ${e.message || e}`);
    }
  }
);
